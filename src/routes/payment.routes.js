const express = require("express");
const router = express.Router();
const {
  createCheckoutSession,
  getPaymentStatus,
} = require("../controllers/payment.controller");
const { protect } = require("../middlewares/auth.middleware");

router.post("/create-checkout-session", protect, createCheckoutSession);
router.get("/status", protect, getPaymentStatus);

module.exports = router;
