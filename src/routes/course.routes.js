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
const validateObjectId = require("../middlewares/validateParams.middleware");
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
  .get(validateObjectId("id"), getCourseById)
  .put(
    auth,
    admin,
    validateObjectId("id"),
    validateBody(updateCourseSchema),
    updateCourse
  )
  .delete(auth, admin, validateObjectId("id"), deleteCourse);

module.exports = router;
