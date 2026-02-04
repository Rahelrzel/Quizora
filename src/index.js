const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const connectDB = require("./config/db.config");
const authRoutes = require("./routes/auth.routes");
const paymentRoutes = require("./routes/payment.routes");
const errorHandler = require("./middlewares/error.middleware");
const HttpError = require("./utils/HttpError");
const { handleWebhook } = require("./controllers/payment.controller");

dotenv.config();

// Fail fast if critical Stripe / client env vars are missing.
// Without these, payments/webhooks cannot function correctly and would fail silently.
const requiredEnv = [
  "STRIPE_SECRET_KEY",
  "STRIPE_WEBHOOK_SECRET",
  "CLIENT_URL",
];
const missingEnv = requiredEnv.filter((name) => !process.env[name]);
if (missingEnv.length > 0) {
  // eslint-disable-next-line no-console
  console.error(
    `[CONFIG] Missing required environment variables: ${missingEnv.join(", ")}`,
  );
  process.exit(1);
}

connectDB();

const app = express();

// IMPORTANT (Stripe webhooks):
// Stripe requires the *raw* request body for signature verification.
// We therefore register the webhook route with `express.raw(...)` *before* `express.json()`
// so that only this route receives the raw Buffer body.
app.post(
  "/api/payments/webhook",
  express.raw({ type: "application/json" }),
  handleWebhook,
);

// All other routes use regular JSON parsing.
app.use(express.json());
app.use(
  cors({
    origin: "*", // allow all origins for testing
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
//app.use(helmet());
app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log(`[DEBUG] ${req.method} ${req.url}`);
  next();
});

app.use("/api/auth", authRoutes);
app.use("/api/categories", require("./routes/category.routes"));
app.use("/api/quizzes", require("./routes/quiz.routes"));
app.use("/api/courses", require("./routes/course.routes"));
app.use("/api/payments", paymentRoutes);
app.use("/api/certificates", require("./routes/certificate.routes"));

app.get("/", (req, res) => {
  res.send("API is running...");
});

// 404 — must be after all route registrations so unmatched paths return JSON
app.use((req, res, next) => next(new HttpError({ status: 404, message: "Not found" })));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.error(`[FATAL] Unhandled Rejection: ${err.message}`);
  console.error(err.stack);
  server.close(() => process.exit(1));
});

process.on("uncaughtException", (err) => {
  console.error(`[FATAL] Uncaught Exception: ${err.message}`);
  console.error(err.stack);
  server.close(() => process.exit(1));
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`[FATAL] Port ${PORT} is already in use.`);
  } else {
    console.error(`[FATAL] Server error: ${err.message}`);
  }
  process.exit(1);
});
