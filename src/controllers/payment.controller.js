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
    const handleWebhook = async (req, res) => {
      const sig = req.headers["stripe-signature"];
      let event;
    
      console.log("[Stripe webhook] Incoming request");
    
      // 1️⃣ Verify signature (ONLY place 400 is allowed)
      try {
        event = stripe.webhooks.constructEvent(
          req.body, // MUST be raw Buffer
          sig,
          process.env.STRIPE_WEBHOOK_SECRET
        );
      } catch (err) {
        console.error("[Stripe webhook] Signature verification failed:", err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
      }
    
      // 2️⃣ Process event SAFELY
      try {
        switch (event.type) {
          case "checkout.session.completed": {
            const session = event.data.object;
    
            const userIdRaw =
              session?.metadata?.userId || session?.client_reference_id;
            const userId = Number(userIdRaw);
    
            const stripePaymentId = session?.payment_intent;
            const stripeCustomerId = session?.customer;
            const amount =
              typeof session?.amount_total === "number"
                ? session.amount_total / 100
                : 0;
            const currency = session?.currency || "usd";
            const paymentMethod =
              Array.isArray(session?.payment_method_types)
                ? session.payment_method_types[0]
                : null;
    
            if (!userId || !stripePaymentId) {
              console.warn(
                "[Stripe webhook] Missing userId or payment_intent — skipping"
              );
              break; // IMPORTANT: do NOT return
            }
    
            await prisma.$transaction(async (tx) => {
              const user = await tx.user.findUnique({
                where: { id: userId },
                select: { id: true, paymentId: true },
              });
    
              if (!user) {
                console.warn(`[Stripe webhook] User not found: ${userId}`);
                return;
              }
    
              const existingPayment = await tx.payment.findUnique({
                where: { userId },
              });
    
              if (existingPayment?.status === "succeeded") {
                if (!user.paymentId) {
                  await tx.user.update({
                    where: { id: userId },
                    data: { paymentId: existingPayment.id },
                  });
                }
                return;
              }
    
              const payment = existingPayment
                ? await tx.payment.update({
                    where: { userId },
                    data: {
                      stripePaymentId,
                      stripeCustomerId: stripeCustomerId || "unknown",
                      amount,
                      currency,
                      status: "succeeded",
                      paymentMethod,
                    },
                  })
                : await tx.payment.create({
                    data: {
                      userId,
                      stripePaymentId,
                      stripeCustomerId: stripeCustomerId || "unknown",
                      amount,
                      currency,
                      status: "succeeded",
                      paymentMethod,
                      receiptUrl: null,
                    },
                  });
    
              if (!user.paymentId) {
                await tx.user.update({
                  where: { id: userId },
                  data: { paymentId: payment.id },
                });
              }
            });
    
            console.log(`[Stripe webhook] Payment succeeded for user ${userId}`);
            break;
          }
    
          // 3️⃣ Allow ALL other events (Stripe sends many)
          default:
            console.log(`[Stripe webhook] Ignored event: ${event.type}`);
        }
      } catch (err) {
        // 🚨 NEVER throw or return non-2xx here
        console.error("[Stripe webhook] Processing error:", err);
      }
    
      // 4️⃣ ALWAYS acknowledge Stripe
      return res.status(200).json({ received: true });
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
