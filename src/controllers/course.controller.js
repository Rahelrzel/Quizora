const Course = require("../models/Course");
const HttpError = require("../utils/HttpError");

// @desc    Get all courses
// @route   GET /api/courses
// @access  Public
const getCourses = async (req, res, next) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    next(error);
  }
};

// @desc    Get single course
// @route   GET /api/courses/:id
// @access  Public
const getCourseById = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return next(new HttpError({ status: 404, message: "Course not found" }));
    }
    res.json(course);
  } catch (error) {
    next(error);
  }
};

// @desc    Create a course
// @route   POST /api/courses
// @access  Admin
const createCourse = async (req, res, next) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (error) {
    next(error);
  }
};

// @desc    Update a course
// @route   PUT /api/courses/:id
// @access  Admin
const updateCourse = async (req, res, next) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!course) {
      return next(new HttpError({ status: 404, message: "Course not found" }));
    }

    res.json(course);
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a course
// @route   DELETE /api/courses/:id
// @access  Admin
const deleteCourse = async (req, res, next) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return next(new HttpError({ status: 404, message: "Course not found" }));
    }

    res.json({ message: "Course removed" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};
