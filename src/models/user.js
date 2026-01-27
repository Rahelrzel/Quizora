const prisma = require("../config/prisma");
const bcrypt = require("bcrypt");

// Since Prisma doesn't have instance methods like Mongoose,
// we provide helper functions or just export the prisma model.
// For minimal changes, we export the prisma model object.

const User = prisma.user;

/**
 * Helper to match password (previously a mongoose instance method)
 * @param {string} enteredPassword
 * @param {string} hashedPassword
 * @returns {Promise<boolean>}
 */
const matchPassword = async (enteredPassword, hashedPassword) => {
  return await bcrypt.compare(enteredPassword, hashedPassword);
};

/**
 * Helper to hash password (previously a mongoose pre-save hook)
 * @param {string} password
 * @returns {Promise<string>}
 */
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

module.exports = {
  ...User,
  matchPassword,
  hashPassword,
};
