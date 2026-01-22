const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const connectDB = require("./config/db.config");
const authRoutes = require("./routes/auth.routes");
const errorHandler = require("./middlewares/error.middleware");

dotenv.config();

connectDB();

const app = express();

app.use(
  express.json({
    verify: (req, res, buf) => {
      req.rawBody = buf;
    },
  }),
);
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

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
