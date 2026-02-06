const prisma = require("../config/prisma");
const HttpError = require("../utils/HttpError");

// @desc    Get all quizzes
// @route   GET /api/quizzes
// @access  Public
const getQuizzes = async (req, res, next) => {
  try {
    const { categoryId } = req.query;
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
      },
    });
    res.json(quizzes);
  } catch (error) {
    next(error);
  }
};

// @desc    Get single quiz
// @route   GET /api/quizzes/:id
// @access  Public
const getQuizById = async (req, res, next) => {
  try {
    // FIX: Prisma expects Int ID, convert param string to number
    const quizId = parseInt(req.params.id, 10);

    const quiz = await prisma.quiz.findUnique({
      where: { id: quizId },
      include: {
        category: {
          select: { name: true, description: true },
        },
        creator: {
          select: { name: true },
        },
        // Only include questions if the user has paid or is the creator/admin
        // Note: For simplicity, we'll fetch them and then filter in the response
        // OR we can fetch them separately if authorized.
        questions: true,
      },
    });

    if (!quiz) {
      return next(new HttpError({ status: 404, message: "Quiz not found" }));
    }

    // Sanitize response: Remove questions if user is not authorized (not paid and not admin/creator)
    // We need to check if req.user exists (from auth middleware)
    const isPaid = req.user && req.user.paymentId;
    const isAdmin = req.user && req.user.role === "admin";

    if (!isPaid && !isAdmin) {
      delete quiz.questions;
      quiz.requiresPayment = true;
    }

    res.json(quiz);
  } catch (error) {
    next(error);
  }
};

// @desc    Create a quiz
// @route   POST /api/quizzes
// @access  Admin
const createQuiz = async (req, res, next) => {
  try {
    const { questions, categoryId, ...rest } = req.body;

    const quiz = await prisma.quiz.create({
      data: {
        ...rest,
        categoryId: parseInt(categoryId),
        creatorId: req.user.id,
        questions: {
          create: questions,
        },
      },
      include: {
        questions: true,
      },
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
    // FIX: ensure numeric ID for Prisma
    const quizId = parseInt(req.params.id, 10);

    const { questions, categoryId, ...rest } = req.body;

    // Logic for updating questions might vary (replace all or update specific).
    // For "minimal changes", we'll simulate replacement if questions are provided.
    const data = { ...rest };
    if (categoryId) data.categoryId = parseInt(categoryId);

    if (questions) {
      // Delete existing questions first (simple replacement strategy)
      await prisma.question.deleteMany({ where: { quizId } }); // FIX: numeric quizId
      data.questions = {
        create: questions,
      };
    }

    const quiz = await prisma.quiz.update({
      where: { id: quizId }, // FIX: numeric quizId
      data,
      include: {
        questions: true,
      },
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
    // FIX: ensure numeric ID for Prisma delete
    const quizId = parseInt(req.params.id, 10);

    // Cascade delete is handled by Prisma schema (onDelete: Cascade)
    const quiz = await prisma.quiz.delete({
      where: { id: quizId }, // FIX: numeric quizId
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

    const quiz = await prisma.quiz.findUnique({
      where: { id: quizId }, // FIX: use parsed Int ID
      include: { questions: true },
    });

    if (!quiz) {
      return next(new HttpError("Quiz not found", 404));
    }

    let scorePoints = 0;
    const totalQuestions = quiz.questions.length;

    if (!answers || !Array.isArray(answers)) {
      return next(new HttpError("Answers array is required", 400));
    }

    quiz.questions.forEach((question, index) => {
      const userAnswerIndex = answers[index];
      if (
        userAnswerIndex !== undefined &&
        userAnswerIndex === question.correctAnswerIndex
      ) {
        scorePoints++;
      }
    });

    const calculatedScore = (scorePoints / totalQuestions) * 100;
    const passed = calculatedScore >= quiz.passingScore;
    let certificateId = null;

    if (passed) {
      const crypto = require("crypto");

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
