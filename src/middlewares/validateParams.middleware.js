const HttpError = require("../utils/HttpError");

// Refactored for MySQL auto-increment IDs (Integers)
const validateId = (paramName) => (req, res, next) => {
  const id = req.params[paramName];

  if (isNaN(parseInt(id)) || parseInt(id).toString() !== id) {
    return next(
      new HttpError({
        status: 400,
        message: `Invalid ${paramName}: Must be an integer`,
      }),
    );
  }

  // Convert to number for convenience in controllers
  req.params[paramName] = parseInt(id);
  next();
};

module.exports = validateId;
