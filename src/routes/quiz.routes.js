const express = require("express");
const {
  getQuizzes,
  getQuizById,
  createQuiz,
  updateQuiz,
  deleteQuiz,
} = require("../controllers/quiz.controller");
const { protect: auth, admin } = require("../middlewares/auth.middleware");
const validateBody = require("../middlewares/validateBody.middleware");
const validateObjectId = require("../middlewares/validateParams.middleware");
const {
  createQuizSchema,
  updateQuizSchema,
} = require("../validations/quiz.validation");

const router = express.Router();

router
  .route("/")
  .get(getQuizzes) // Filter by category is handled in controller via query params
  .post(auth, admin, validateBody(createQuizSchema), createQuiz);

router
  .route("/:id")
  .get(validateObjectId("id"), getQuizById)
  .put(
    auth,
    admin,
    validateObjectId("id"),
    validateBody(updateQuizSchema),
    updateQuiz
  )
  .delete(auth, admin, validateObjectId("id"), deleteQuiz);

module.exports = router;
