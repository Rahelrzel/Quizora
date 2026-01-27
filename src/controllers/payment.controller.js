const prisma = require("../config/prisma");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const HttpError = require("../utils/HttpError");

// @desc    Create Stripe Checkout Session
// @route   POST /api/payments/create-checkout-session
// @access  Private
const createCheckoutSession = async (req, res, next) => {
  try {
    const { quizId } = req.body;

    const quiz = await prisma.quiz.findUnique({
      where: { id: parseInt(quizId) },
    });

    if (!quiz) {
      return next(new HttpError("Quiz not found", 404));
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: quiz.title,
            },
            unit_amount: 1000, // $10.00
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/payment-cancel`,
      metadata: {
        userId: req.user.id.toString(),
        quizId: quiz.id.toString(),
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
    event = stripe.webhooks.constructEvent(
      req.rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET,
    );
  } catch (err) {
    console.error(`Webhook Error: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const { userId, quizId } = session.metadata;

    try {
      // Add quiz to user's purchasedQuizzes in MySQL
      await prisma.user.update({
        where: { id: parseInt(userId) },
        data: {
          purchasedQuizzes: {
            connect: { id: parseInt(quizId) },
          },
        },
      });
      console.log(`User ${userId} purchased Quiz ${quizId}`);
    } catch (error) {
      console.error("Error updating user purchased quizzes:", error);
    }
  }

  res.json({ received: true });
};

module.exports = {
  createCheckoutSession,
  handleWebhook,
};
