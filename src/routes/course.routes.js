const express = require("express");
const {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/course.controller");
const { protect: auth, admin } = require("../middlewares/auth.middleware");
const validateBody = require("../middlewares/validateBody.middleware");
const validateId = require("../middlewares/validateParams.middleware");
const {
  createCourseSchema,
  updateCourseSchema,
} = require("../validations/course.validation");

const router = express.Router();

router
  .route("/")
  .get(getCourses)
  .post(auth, admin, validateBody(createCourseSchema), createCourse);

router
  .route("/:id")
  .get(validateId("id"), getCourseById)
  .put(
    auth,
    admin,
    validateId("id"),
    validateBody(updateCourseSchema),
    updateCourse,
  )
  .delete(auth, admin, validateId("id"), deleteCourse);

module.exports = router;
