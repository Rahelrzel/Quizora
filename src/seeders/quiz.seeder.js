const prisma = require("../prisma");
const { hashPassword } = require("../models/User");

const seedQuizzes = async () => {
  try {
    console.log("Connecting to MySQL via Prisma...");

    // 1. Ensure a Test Category exists
    let category = await prisma.testCategory.findUnique({
      where: { name: "General Knowledge" },
    });
    if (!category) {
      category = await prisma.testCategory.create({
        data: {
          name: "General Knowledge",
          description:
            "A category for testing various general knowledge topics.",
        },
      });
      console.log("Created Test Category: General Knowledge");
    }

    // 2. Ensure an Admin User exists
    let admin = await prisma.user.findFirst({
      where: { role: "admin" },
    });
    if (!admin) {
      const hashedPassword = await hashPassword("password123");
      admin = await prisma.user.create({
        data: {
          name: "Admin User",
          email: "admin@quizora.com",
          password: hashedPassword,
          role: "admin",
        },
      });
      console.log("Created Admin User: admin@quizora.com");
    }

    // 3. Clear existing quizzes (Note: Cascade delete will handle questions)
    await prisma.quiz.deleteMany({});
    console.log("Cleared existing quizzes.");

    // 4. Generate 10 Quizzes with 10 questions each
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

      await prisma.quiz.create({
        data: {
          title: `Mock Quiz ${i}: MySQL edition`,
          passingScore: 70,
          totalPoints: 100,
          timeLimit: 20,
          categoryId: category.id,
          creatorId: admin.id,
          questions: {
            create: questions,
          },
        },
      });
    }

    console.log(
      `Successfully seeded 10 quizzes with 10 questions each in MySQL.`,
    );
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedQuizzes();
