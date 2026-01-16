const TestCategory = require("../models/TestCategory");
const HttpError = require("../utils/HttpError");

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
const getCategories = async (req, res, next) => {
  try {
    const categories = await TestCategory.find();
    res.json(categories);
  } catch (error) {
    next(error);
  }
};

// @desc    Get single category
// @route   GET /api/categories/:id
// @access  Public
const getCategoryById = async (req, res, next) => {
  try {
    const category = await TestCategory.findById(req.params.id);
    if (!category) {
      return next(
        new HttpError({ status: 404, message: "Category not found" })
      );
    }
    res.json(category);
  } catch (error) {
    next(error);
  }
};

// @desc    Create a category
// @route   POST /api/categories
// @access  Admin
const createCategory = async (req, res, next) => {
  try {
    const existingCategory = await TestCategory.findOne({
      name: req.body.name,
    });
    if (existingCategory) {
      return next(
        new HttpError({ status: 400, message: "Category already exists" })
      );
    }

    const category = await TestCategory.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};

// @desc    Update a category
// @route   PUT /api/categories/:id
// @access  Admin
const updateCategory = async (req, res, next) => {
  try {
    const category = await TestCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!category) {
      return next(
        new HttpError({ status: 404, message: "Category not found" })
      );
    }

    res.json(category);
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a category
// @route   DELETE /api/categories/:id
// @access  Admin
const deleteCategory = async (req, res, next) => {
  try {
    const category = await TestCategory.findByIdAndDelete(req.params.id);

    if (!category) {
      return next(
        new HttpError({ status: 404, message: "Category not found" })
      );
    }

    res.json({ message: "Category removed" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
