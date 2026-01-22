const mongoose = require("mongoose");

const CertificateSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TestCategory",
      required: true,
    },
    quizId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
      required: true,
    },
    score: { type: Number, required: true },
    issueDate: { type: Date, default: Date.now },
    certificateID: { type: String, unique: true, required: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Certificate", CertificateSchema);
