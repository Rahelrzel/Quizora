const jwt = require("jsonwebtoken");
const HttpError = require("../utils/HttpError");
const User = require("../models/user");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.userId).select("-password");

      if (!req.user) {
        return next(new HttpError("Not authorized, user not found", 401));
      }

      next();
    } catch (error) {
      console.error(error);
      return next(new HttpError("Not authorized, token failed", 401));
    }
  }

  if (!token) {
    return next(new HttpError("Not authorized, no token", 401));
  }
};

const admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return next(new HttpError("Not authorized as an admin", 403));
  }
};

module.exports = { protect, admin };
