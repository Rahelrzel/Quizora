const express = require("express");
const {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category.controller");
const { protect: auth, admin } = require("../middlewares/auth.middleware");
const validateBody = require("../middlewares/validateBody.middleware");
const validateId = require("../middlewares/validateParams.middleware");
const {
  createCategorySchema,
  updateCategorySchema,
} = require("../validations/category.validation");

const router = express.Router();
console.log("Category routes loaded");

router
  .route("/")
  .get(getCategories)
  .post(auth, admin, validateBody(createCategorySchema), createCategory);

router
  .route("/:id")
  .get(validateId("id"), getCategoryById)
  .put(
    auth,
    admin,
    validateId("id"),
    validateBody(updateCategorySchema),
    updateCategory,
  )
  .delete(auth, admin, validateId("id"), deleteCategory);

module.exports = router;
