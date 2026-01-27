const express = require("express");
const {
  register,
  login,
  getAllUsers,
} = require("../controllers/auth.controller");
const validateBody = require("../middlewares/validateBody.middleware");
const { protect, admin } = require("../middlewares/auth.middleware");
const {
  registerSchema,
  loginSchema,
} = require("../validations/auth.validation");

const router = express.Router();

router.post("/register", validateBody(registerSchema), register);
router.post("/login", validateBody(loginSchema), login);
router.get("/users", protect, admin, getAllUsers);

module.exports = router;
