const crypto = require("crypto");
const prisma = require("../config/prisma");
const HttpError = require("../utils/HttpError");

// @desc    Get all quizzes
// @route   GET /api/quizzes
// @access  Public
const getQuizzes = async (req, res, next) => {
  try {
    const { categoryId, lang = "en" } = req.query;
    const where = categoryId ? { categoryId: parseInt(categoryId) } : {};

    const quizzes = await prisma.quiz.findMany({
      where,
      include: {
        category: {
          select: { name: true, description: true },
        },
        creator: {
          select: { name: true },
        },
        translations: {
          where: {
            OR: [{ language: lang }, { language: "en" }],
          },
        },
      },
    });

    const formattedQuizzes = quizzes.map((quiz) => {
      // Find requested translation or fallback to en
      const translation =
        quiz.translations.find((t) => t.language === lang) ||
        quiz.translations.find((t) => t.language === "en") ||
        quiz.translations[0];

      return {
        id: quiz.id,
        title: translation?.title || "Untitled",
        description: translation?.description,
        passingScore: quiz.passingScore,
        totalPoints: quiz.totalPoints,
        timeLimit: quiz.timeLimit,
        categoryId: quiz.categoryId,
        category: quiz.category,
      };
    });

    res.json(formattedQuizzes);
  } catch (error) {
    next(error);
  }
};

// @desc    Get single quiz
// @route   GET /api/quizzes/:id
// @access  Public
const getQuizById = async (req, res, next) => {
  try {
    const quizId = parseInt(req.params.id, 10);
    const lang = req.query.lang || "en";

    const quiz = await prisma.quiz.findUnique({
      where: { id: quizId },
      include: {
        translations: {
          where: {
            language: { in: [lang, "en"] },
          },
        },
        questions: {
          include: {
            translations: {
              where: {
                language: { in: [lang, "en"] },
              },
            },
          },
        },
      },
    });

    if (!quiz) {
      return next(new HttpError({ status: 404, message: "Quiz not found" }));
    }

    // Helper to find translation with fallback to English
    const getBestTranslation = (translations, targetLang) => {
      return (
        translations.find((t) => t.language === targetLang) ||
        translations.find((t) => t.language === "en") ||
        translations[0]
      );
    };

    const quizTranslation = getBestTranslation(quiz.translations, lang);

    // Filter questions based on access (admin or paid)
    const isPaid = req.user && req.user.paymentId;
    const isAdmin = req.user && req.user.role === "admin";
    const canSeeQuestions = isPaid || isAdmin;

    const formattedQuestions = canSeeQuestions
      ? quiz.questions.map((q) => {
          const qTrans = getBestTranslation(q.translations, lang);
          return {
            id: q.id,
            questionText: qTrans?.questionText || "",
            options: qTrans?.options || [],
            explanation: qTrans?.explanation || null,
          };
        })
      : [];

    // Return the clean flattened response
    const response = {
      id: quiz.id,
      title: quizTranslation?.title || "Untitled",
      description: quizTranslation?.description || "",
      passingScore: quiz.passingScore,
      questions: formattedQuestions,
    };

    res.json(response);
  } catch (error) {
    next(error);
  }
};

// @desc    Create a quiz
// @route   POST /api/quizzes
// @access  Admin
const createQuiz = async (req, res, next) => {
  try {
    const {
      questions,
      categoryId,
      translations,
      passingScore,
      totalPoints,
      timeLimit,
    } = req.body;

    // Validate correctAnswerIndex within options length for each translation
    questions.forEach((q, qIndex) => {
      q.translations.forEach((t) => {
        if (q.correctAnswerIndex >= t.options.length) {
          throw new HttpError(
            `Correct answer index ${q.correctAnswerIndex} is out of bounds for question ${qIndex + 1} in language ${t.language}`,
            400,
          );
        }
      });
    });

    const quiz = await prisma.$transaction(async (tx) => {
      return await tx.quiz.create({
        data: {
          passingScore: passingScore || 70,
          totalPoints: totalPoints,
          timeLimit: timeLimit,
          categoryId: parseInt(categoryId),
          creatorId: req.user.id,
          translations: {
            create: translations,
          },
          questions: {
            create: questions.map((q) => ({
              correctAnswerIndex: q.correctAnswerIndex,
              translations: {
                create: q.translations,
              },
            })),
          },
        },
        include: {
          translations: true,
          questions: {
            include: {
              translations: true,
            },
          },
        },
      });
    });

    res.status(201).json(quiz);
  } catch (error) {
    next(error);
  }
};

// @desc    Update a quiz
// @route   PUT /api/quizzes/:id
// @access  Admin
const updateQuiz = async (req, res, next) => {
  try {
    const quizId = parseInt(req.params.id, 10);
    const { questions, categoryId, translations, ...rest } = req.body;

    const quiz = await prisma.$transaction(async (tx) => {
      // Update basic quiz info
      const updatedQuiz = await tx.quiz.update({
        where: { id: quizId },
        data: {
          ...rest,
          categoryId: categoryId ? parseInt(categoryId) : undefined,
        },
      });

      // Update/Replace translations
      if (translations) {
        await tx.quizTranslation.deleteMany({ where: { quizId } });
        await tx.quizTranslation.createMany({
          data: translations.map((t) => ({ ...t, quizId })),
        });
      }

      // Update/Replace questions
      if (questions) {
        await tx.question.deleteMany({ where: { quizId } });
        for (const q of questions) {
          await tx.question.create({
            data: {
              quizId,
              correctAnswerIndex: q.correctAnswerIndex,
              translations: {
                create: q.translations,
              },
            },
          });
        }
      }

      return await tx.quiz.findUnique({
        where: { id: quizId },
        include: {
          translations: true,
          questions: { include: { translations: true } },
        },
      });
    });

    if (!quiz) {
      return next(new HttpError({ status: 404, message: "Quiz not found" }));
    }

    res.json(quiz);
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a quiz
// @route   DELETE /api/quizzes/:id
// @access  Admin
const deleteQuiz = async (req, res, next) => {
  try {
    const quizId = parseInt(req.params.id, 10);

    // Cascade delete handles QuizTranslation and Question (then QuestionTranslation)
    const quiz = await prisma.quiz.delete({
      where: { id: quizId },
    });

    if (!quiz) {
      return next(new HttpError({ status: 404, message: "Quiz not found" }));
    }

    res.json({ message: "Quiz removed" });
  } catch (error) {
    next(error);
  }
};

// @desc    Submit quiz attempt
// @route   POST /api/quizzes/:id/submit
// @access  Private
const submitQuiz = async (req, res, next) => {
  try {
    // ONE-TIME GLOBAL PAYMENT RULE:
    // If a user has a successful payment (paymentId is set), they can access ALL quizzes.
    if (!req.user.paymentId) {
      return next(
        new HttpError({
          status: 403,
          message: "Payment required to access quizzes",
        }),
      );
    }

    // FIX: Prisma expects numeric quiz ID
    const quizId = parseInt(req.params.id, 10);
    const { answers } = req.body;

    if (!answers || !Array.isArray(answers)) {
      return next(new HttpError("Answers array is required", 400));
    }

    const quiz = await prisma.quiz.findUnique({
      where: { id: quizId },
      include: { questions: true },
    });

    if (!quiz) {
      return next(new HttpError("Quiz not found", 404));
    }

    let correctCount = 0;
    const totalQuestions = quiz.questions.length;
    const answeredQuestionIds = new Set();

    // Use a Map for fast question lookup
    const questionMap = new Map(quiz.questions.map((q) => [q.id, q]));

    // Score based on questionId and selectedIndex
    answers.forEach((answer) => {
      // Convert questionId and selectedIndex to Number before comparison
      // Safely handle strings or numbers sent from frontend
      const qId = Number(answer.questionId);
      const sIndex = Number(answer.selectedIndex);

      // Safely ignore invalid or NaN values
      if (isNaN(qId) || isNaN(sIndex)) {
        return;
      }

      // Ignore duplicate questionIds in a single submission
      if (answeredQuestionIds.has(qId)) {
        return;
      }

      // Fast lookup using Map
      const question = questionMap.get(qId);

      if (question) {
        answeredQuestionIds.add(qId);
        if (sIndex === question.correctAnswerIndex) {
          correctCount++;
        }
      }
    });

    // Calculate score ONLY ONCE
    // Formula: (correctCount / totalQuestions) * quiz.totalPoints
    const calculatedScore =
      totalQuestions > 0
        ? (correctCount / totalQuestions) * quiz.totalPoints
        : 0;
    const passed = calculatedScore >= quiz.passingScore;
    let certificateId = null;

    if (passed) {
      // Generate Unique ID
      const uniqueId = `CERT-${new Date().getFullYear()}-${crypto.randomBytes(4).toString("hex").toUpperCase()}`;

      // Check for existing first
      const existingCert = await prisma.certificate.findFirst({
        where: {
          userId: req.user.id,
          quizId: quiz.id,
        },
      });

      if (existingCert) {
        certificateId = existingCert.certificateID;
        // Update the score on the existing certificate to match the current successful attempt
        await prisma.certificate.update({
          where: { id: existingCert.id },
          data: { score: calculatedScore },
        });
      } else {
        const cert = await prisma.certificate.create({
          data: {
            userId: req.user.id,
            categoryId: quiz.categoryId,
            quizId: quiz.id,
            score: calculatedScore,
            certificateID: uniqueId,
          },
        });
        certificateId = cert.certificateID;
      }
    }

    res.json({
      passed,
      score: calculatedScore,
      certificateId,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getQuizzes,
  getQuizById,
  createQuiz,
  updateQuiz,
  deleteQuiz,
  submitQuiz,
};
