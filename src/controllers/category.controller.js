const {
  findMany,
  findUnique,
  create,
  update,
  delete: deleteOne,
} = require("../models/TestCategory");
const HttpError = require("../utils/HttpError");

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
const getCategories = async (req, res, next) => {
  try {
    const categories = await findMany();
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
    const category = await findUnique({
      where: { id: req.params.id },
    });
    if (!category) {
      return next(
        new HttpError({ status: 404, message: "Category not found" }),
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
    const existingCategory = await findUnique({
      where: { name: req.body.name },
    });
    if (existingCategory) {
      return next(
        new HttpError({ status: 400, message: "Category already exists" }),
      );
    }

    const category = await create({
      data: req.body,
    });
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
    const category = await update({
      where: { id: req.params.id },
      data: req.body,
    });

    if (!category) {
      return next(
        new HttpError({ status: 404, message: "Category not found" }),
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
    const category = await deleteOne({
      where: { id: req.params.id },
    });

    if (!category) {
      return next(
        new HttpError({ status: 404, message: "Category not found" }),
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
