const Quiz = require("../models/Quiz");
const HttpError = require("../utils/HttpError");

// @desc    Get all quizzes
// @route   GET /api/quizzes
// @access  Public
const getQuizzes = async (req, res, next) => {
  try {
    const { categoryId } = req.query;
    const filter = categoryId ? { categoryId } : {};

    const quizzes = await Quiz.find(filter)
      .populate("categoryId", "name description")
      .populate("creator", "name"); // Populate creator if needed
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
    const quiz = await Quiz.findById(req.params.id)
      .populate("categoryId", "name description")
      .populate("creator", "name");

    if (!quiz) {
      return next(new HttpError({ status: 404, message: "Quiz not found" }));
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
    // Add creator to body from req.user (set by authMiddleware)
    const quizData = { ...req.body, creator: req.user._id };

    const quiz = await Quiz.create(quizData);
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
    const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
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
    const quiz = await Quiz.findByIdAndDelete(req.params.id);

    if (!quiz) {
      return next(new HttpError({ status: 404, message: "Quiz not found" }));
    }

    res.json({ message: "Quiz removed" });
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
};
