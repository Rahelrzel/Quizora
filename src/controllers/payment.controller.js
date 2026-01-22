const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const User = require("../models/user");
const HttpError = require("../utils/HttpError");

// @desc    Create Stripe Checkout Session
// @route   POST /api/payments/create-checkout-session
// @access  Private
const createCheckoutSession = async (req, res, next) => {
  try {
    const { quizId } = req.body;

    if (!quizId) {
      return next(new HttpError("Quiz ID is required", 400));
    }

    // You might want to fetch the quiz details here to get the real title/price
    // For now, using a generic product or dynamic price data
    // Assuming a fixed price or passing it in body (not recommended for security)
    // Or valid quizId check

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Quiz Access", // Ideally fetching Quiz title
              metadata: {
                quizId: quizId,
              },
            },
            unit_amount: 500, // $5.00 - Placeholder price
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/quiz/${quizId}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/quiz/${quizId}?canceled=true`,
      metadata: {
        userId: req.user._id.toString(),
        quizId: quizId,
      },
    });

    res.json({ url: session.url });
  } catch (error) {
    next(error);
  }
};

// @desc    Stripe Webhook
// @route   POST /api/payments/webhook
// @access  Public (Stripe)
const handleWebhook = async (req, res, next) => {
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    // req.body must be raw buffer here
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET,
    );
  } catch (err) {
    console.error(`Webhook Error: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const { userId, quizId } = session.metadata;

    if (userId && quizId) {
      try {
        await User.findByIdAndUpdate(userId, {
          $addToSet: { purchasedQuizzes: quizId },
        });
        console.log(`User ${userId} unlocked quiz ${quizId}`);
      } catch (err) {
        console.error("Error updating user purchase:", err);
      }
    }
  }

  res.json({ received: true });
};

module.exports = {
  createCheckoutSession,
  handleWebhook,
};
