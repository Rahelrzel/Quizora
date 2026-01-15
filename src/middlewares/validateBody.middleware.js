const HttpError = require("../utils/HttpError");

const validateBody = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    if (error.errors) {
      const errorMessages = error.errors.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }));

      return next(
        new HttpError({
          status: 400,
          message: "Validation Error",
          options: { errors: errorMessages },
        })
      );
    }
    next(error);
  }
};

module.exports = validateBody;
