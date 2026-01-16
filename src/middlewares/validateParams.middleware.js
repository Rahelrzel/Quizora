const { z } = require("zod");
const HttpError = require("../utils/HttpError");
const mongoose = require("mongoose");

const validateObjectId = (paramName) => (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params[paramName])) {
    return next(
      new HttpError({
        status: 400,
        message: `Invalid ${paramName}`,
      })
    );
  }
  next();
};

module.exports = validateObjectId;
