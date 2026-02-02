const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const connectDB = require("./config/db.config");
const authRoutes = require("./routes/auth.routes");
const errorHandler = require("./middlewares/error.middleware");
const HttpError = require("./utils/HttpError");

dotenv.config();

connectDB();

const app = express();

// IMPORTANT (Stripe webhooks):
// Stripe requires the *raw* request body to verify signatures. If we run `express.json()`
// on the webhook route first, we may lose the raw bytes and signature verification fails.
// So we skip JSON parsing for the webhook endpoint and let the route handle raw parsing.
const jsonParser = express.json({
  verify: (req, res, buf) => {
    req.rawBody = buf;
  },
});

app.use((req, res, next) => {
  if (req.originalUrl === "/api/payments/webhook") return next();
  return jsonParser(req, res, next);
});
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
app.use("/api/payments", require("./routes/payment.routes"));
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
