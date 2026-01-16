const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswerIndex: { type: Number, required: true },
  explanation: { type: String },
});

const quizSchema = new mongoose.Schema(
  {
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TestCategory",
      required: true,
    },
    title: { type: String, required: true },
    questions: [questionSchema],
    passingScore: { type: Number, default: 70 },
    totalPoints: { type: Number, required: true },
    timeLimit: { type: Number },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quiz", quizSchema);
