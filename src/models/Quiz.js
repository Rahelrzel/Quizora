const prisma = require("../config/prisma");

// Quiz and Question are separate tables in SQL but were embedded in Mongo.
// We export the Quiz model from Prisma.

const Quiz = prisma.quiz;

module.exports = Quiz;
