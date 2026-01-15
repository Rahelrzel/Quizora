const HttpError = require("../utils/HttpError");

const errorHandler = (err, req, res, next) => {
  // Support both statusCode (legacy) and status (new) properties
  let statusCode = err.status || err.statusCode || 500;
  let message = err.message || "Server Error";

  if (err.name === "CastError" && err.kind === "ObjectId") {
    statusCode = 404;
    message = "Resource not found";
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
    errors: err.options?.errors || err.errors || undefined, // Handle nested errors from new HttpError options
  });
};

module.exports = errorHandler;
