const prisma = require("../config/prisma");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const HttpError = require("../utils/HttpError");

// @desc    Create Stripe Checkout Session
// @route   POST /api/payments/create-checkout-session
// @access  Private
const createCheckoutSession = async (req, res, next) => {
  try {
    // ONE-TIME PAYMENT RULE:
    // If the user has already paid successfully, we must not create a new Checkout session.
    const userId = req.user?.id;
    if (!userId) {
      return next(new HttpError({ status: 401, message: "Not authorized" }));
    }

    // Fast-path: `paymentId` is our "paid flag" for the frontend.
    // If it is already set, this user must be treated as already paid.
    if (req.user.paymentId) {
      return next(new HttpError({ status: 400, message: "User already paid" }));
    }

    // Extra safety: even if `req.user.paymentId` is missing/stale, enforce "one succeeded payment per user"
    // at the database layer via Payment.userId UNIQUE.
    const existingPayment = await prisma.payment.findUnique({
      where: { userId },
      select: { status: true },
    });
    if (existingPayment?.status === "succeeded") {
      return next(new HttpError({ status: 400, message: "User already paid" }));
    }

    // One-time access product (NOT quiz-specific)
    const amountCents = Number.parseInt(
      process.env.ONE_TIME_ACCESS_AMOUNT_CENTS || "1000",
      10,
    );
    const currency = (process.env.STRIPE_CURRENCY || "usd").toLowerCase();
    const productName =
      process.env.ONE_TIME_ACCESS_PRODUCT_NAME || "Quizora Full Access";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      // Ensure Checkout creates a Stripe Customer so `session.customer` is populated
      // (our Payment model requires `stripeCustomerId`).
      customer_creation: "always",
      customer_email: req.user.email,
      line_items: [
        {
          price_data: {
            currency,
            product_data: {
              name: productName,
            },
            unit_amount: amountCents, // e.g. 1000 => $10.00
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/payment-cancel`,
      client_reference_id: userId.toString(),
      metadata: {
        // Webhook will use this to map the payment to a user.
        userId: userId.toString(),
        purpose: "full_access",
      },
    });

    res.json({ id: session.id, url: session.url });
  } catch (error) {
    next(error);
  }
};

// @desc    Webhook for Stripe Events
// @route   POST /api/payments/webhook
// @access  Public
const handleWebhook = async (req, res, next) => {
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    // With `express.raw({ type: "application/json" })`, `req.body` is a Buffer.
    // Stripe signature verification requires the exact raw bytes.
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET,
    );
  } catch (err) {
    console.error(`Webhook Error: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const userIdRaw =
      session?.metadata?.userId || session?.client_reference_id || null;
    const userId = userIdRaw ? Number.parseInt(userIdRaw, 10) : NaN;

    // PaymentIntent ID is our durable "Stripe payment id" (unique per charge)
    const stripePaymentId = session?.payment_intent || null;
    const stripeCustomerId = session?.customer || null;
    const amount = typeof session?.amount_total === "number" ? session.amount_total / 100 : 0;
    const currency = session?.currency || "usd";
    const paymentMethod =
      Array.isArray(session?.payment_method_types) && session.payment_method_types.length
        ? session.payment_method_types[0]
        : null;

    try {
      // Idempotency + safety:
      // - Stripe may retry webhooks.
      // - We must ensure only ONE successful payment row per user and set User.paymentId once.
      // - Payment.userId is UNIQUE in Prisma schema, preventing duplicates at DB level.
      if (!Number.isFinite(userId) || !stripePaymentId) {
        console.warn(
          "[Stripe webhook] Missing userId or payment_intent on checkout.session.completed",
        );
        return res.json({ received: true });
      }

      await prisma.$transaction(async (tx) => {
        const user = await tx.user.findUnique({
          where: { id: userId },
          select: { id: true, paymentId: true },
        });

        if (!user) {
          // Don't keep retrying forever for an unknown userId.
          console.warn(`[Stripe webhook] User not found for id=${userId}`);
          return;
        }

        const existingPaymentByUser = await tx.payment.findUnique({
          where: { userId },
          select: { id: true, status: true, stripePaymentId: true },
        });

        // If the user already has a succeeded payment, just ensure `user.paymentId` is set and exit.
        if (existingPaymentByUser?.status === "succeeded") {
          if (!user.paymentId) {
            await tx.user.update({
              where: { id: userId },
              data: { paymentId: existingPaymentByUser.id },
            });
          }
          return;
        }

        let payment;
        if (existingPaymentByUser) {
          // Reuse the single per-user Payment row (userId UNIQUE) and mark it succeeded.
          payment = await tx.payment.update({
            where: { userId },
            data: {
              stripePaymentId,
              stripeCustomerId: stripeCustomerId || "unknown",
              amount,
              currency,
              status: "succeeded",
              paymentMethod,
            },
          });
        } else {
          // Create the single per-user Payment row on first success.
          payment = await tx.payment.create({
            data: {
              userId,
              stripePaymentId,
              // If Stripe didn't create a customer (shouldn't happen with customer_creation="always"),
              // we still store a placeholder to satisfy the schema, but log above.
              stripeCustomerId: stripeCustomerId || "unknown",
              amount,
              currency,
              status: "succeeded",
              paymentMethod,
              receiptUrl: null,
            },
          });
        }

        // This is the flag the frontend uses forever: user.paymentId !== null => paid
        if (!user.paymentId) {
          await tx.user.update({
            where: { id: userId },
            data: { paymentId: payment.id },
          });
        }
      });

      console.log(`User ${userId} payment succeeded (one-time access).`);
    } catch (error) {
      console.error("Error processing Stripe webhook:", error);
    }
  }

  res.json({ received: true });
};

// @desc    Check if current user is paid
// @route   GET /api/payments/status
// @access  Private
const getPaymentStatus = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return next(new HttpError({ status: 401, message: "Not authorized" }));
    }

    // Fast check used by frontend: paymentId null => not paid
    if (!req.user.paymentId) {
      return res.json({ paid: false });
    }

    // Safety: confirm payment exists, belongs to user, and is succeeded
    const payment = await prisma.payment.findUnique({
      where: { id: req.user.paymentId },
      select: { status: true, userId: true },
    });

    const paid = Boolean(
      payment && payment.userId === userId && payment.status === "succeeded",
    );

    return res.json({ paid });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCheckoutSession,
  handleWebhook,
  getPaymentStatus,
};
