const express = require("express");
const router = express.Router();
const {
  createCheckoutSession,
  handleWebhook,
} = require("../controllers/payment.controller");
const { protect } = require("../middlewares/auth.middleware");

router.post("/create-checkout-session", protect, createCheckoutSession);
router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  handleWebhook,
);

module.exports = router;
