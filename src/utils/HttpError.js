class HttpError extends Error {
  constructor({ status = 500, message, options = {} }) {
    super(message);
    this.status = status;
    this.options = options;

    // Optional: keep stack trace for debugging
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = HttpError;
