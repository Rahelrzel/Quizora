const jwt = require("jsonwebtoken");
const {
  findUnique,
  create,
  matchPassword,
  hashPassword,
} = require("../models/User");
const HttpError = require("../utils/HttpError");

// Generate JWT token
const generateToken = (id, role) => {
  return jwt.sign({ userId: id, role }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// Register a new user
const register = async (req, res, next) => {
  try {
    const { name, email, password, phone } = req.body;

    // Check if user already exists
    const userExists = await findUnique({ where: { email } });
    if (userExists) {
      return next(
        new HttpError({ status: 400, message: "User already exists" }),
      );
    }

    // Hash password (previously done in mongoose pre-save)
    const hashedPassword = await hashPassword(password);

    // Create user
    const user = await create({
      data: {
        name,
        email,
        password: hashedPassword,
        phone,
      },
    });

    if (user) {
      res.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user.id, user.role),
      });
    } else {
      return next(new HttpError({ status: 400, message: "Invalid user data" }));
    }
  } catch (error) {
    next(error);
  }
};

// Login existing user
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await findUnique({ where: { email } });

    if (user && (await matchPassword(password, user.password))) {
      res.json({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user.id, user.role),
      });
    } else {
      return next(
        new HttpError({ status: 401, message: "Invalid email or password" }),
      );
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
};
