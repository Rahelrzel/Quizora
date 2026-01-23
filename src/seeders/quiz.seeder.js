const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const Quiz = require("../models/Quiz");
const TestCategory = require("../models/TestCategory");
const User = require("../models/User");

dotenv.config({ path: path.join(__dirname, "../../.env") });

const seedQuizzes = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB...");

    // 1. Ensure a Test Category exists
    let category = await TestCategory.findOne({ name: "General Knowledge" });
    if (!category) {
      category = await TestCategory.create({
        name: "General Knowledge",
        description: "A category for testing various general knowledge topics.",
      });
      console.log("Created Test Category: General Knowledge");
    }

    // 2. Ensure an Admin User exists for the creator field
    let admin = await User.findOne({ role: "admin" });
    if (!admin) {
      admin = await User.create({
        name: "Admin User",
        email: "admin@quizora.com",
        password: "password123", // Will be hashed by pre-save middleware
        role: "admin",
      });
      console.log("Created Admin User: admin@quizora.com");
    }

    // 3. Clear existing quizzes (Optional, but good for clean seeding)
    await Quiz.deleteMany({});
    console.log("Cleared existing quizzes.");

    // 4. Generate 10 Quizzes with 10 questions each
    const quizzes = [];
    for (let i = 1; i <= 10; i++) {
      const questions = [];
      for (let j = 1; j <= 10; j++) {
        questions.push({
          questionText: `Question ${j} for Quiz ${i}: What is ${j} + ${i}?`,
          options: [`${j + i}`, `${j + i + 1}`, `${j + i - 1}`, `${j * i}`],
          correctAnswerIndex: 0,
          explanation: `The answer is ${j + i} because math.`,
        });
      }

      quizzes.push({
        categoryId: category._id,
        title: `Mock Quiz ${i}: Advanced Patterns`,
        questions,
        passingScore: 70,
        totalPoints: 100,
        timeLimit: 20, // 20 minutes
        creator: admin._id,
      });
    }

    await Quiz.insertMany(quizzes);
    console.log(`Successfully seeded 10 quizzes with 10 questions each.`);

    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedQuizzes();
