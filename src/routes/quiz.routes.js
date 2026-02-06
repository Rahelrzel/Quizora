const express = require("express");
const {
  getQuizzes,
  getQuizById,
  createQuiz,
  updateQuiz,
  deleteQuiz,
  submitQuiz,
} = require("../controllers/quiz.controller");
const {
  protect: auth,
  admin,
  optionalProtect,
} = require("../middlewares/auth.middleware");
const validateBody = require("../middlewares/validateBody.middleware");
const validateId = require("../middlewares/validateParams.middleware");
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
  .get(validateId("id"), optionalProtect, getQuizById)
  .put(
    auth,
    admin,
    validateId("id"),
    validateBody(updateQuizSchema),
    updateQuiz,
  )
  .delete(auth, admin, validateId("id"), deleteQuiz);

router.post("/:id/submit", auth, validateId("id"), submitQuiz);

module.exports = router;
