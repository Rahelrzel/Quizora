const express = require("express");
const { register, login } = require("../controllers/auth.controller");
const validateBody = require("../middlewares/validateBody.middleware");
const {
  registerSchema,
  loginSchema,
} = require("../validations/auth.validation");

const router = express.Router();

router.post("/register", validateBody(registerSchema), register);
router.post("/login", validateBody(loginSchema), login);

module.exports = router;
