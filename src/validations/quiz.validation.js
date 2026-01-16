const { z } = require("zod");

const questionSchema = z.object({
  questionText: z.string().min(1, "Question text is required"),
  options: z.array(z.string().min(1)).min(2, "At least 2 options required"),
  correctAnswerIndex: z.number().int().min(0, "Invalid correct answer index"),
  explanation: z.string().optional(),
});

const createQuizSchema = z.object({
  categoryId: z.string().length(24, "Invalid Category ID"),
  title: z.string().min(1, "Title is required"),
  questions: z
    .array(questionSchema)
    .min(1, "At least one question is required"),
  passingScore: z.number().min(0).max(100).optional(),
  totalPoints: z.number().min(1, "Total points is required"),
  timeLimit: z.number().min(1, "Time limit must be positive").optional(), // in minutes
});

const updateQuizSchema = z.object({
  categoryId: z.string().length(24, "Invalid Category ID").optional(),
  title: z.string().min(1, "Title is required").optional(),
  questions: z
    .array(questionSchema)
    .min(1, "At least one question is required")
    .optional(),
  passingScore: z.number().min(0).max(100).optional(),
  totalPoints: z.number().min(1, "Total points is required").optional(),
  timeLimit: z.number().min(1, "Time limit must be positive").optional(),
});

module.exports = {
  createQuizSchema,
  updateQuizSchema,
};
