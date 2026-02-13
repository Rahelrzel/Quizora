const { z } = require("zod");

// Helper for numeric IDs in MySQL
const idSchema = z.union([
  z.number().int().positive(),
  z
    .string()
    .regex(/^\d+$/)
    .transform((v) => parseInt(v, 10)),
]);

const languageEnum = z.enum(["en", "fr", "es", "de", "ar"]);

const quizTranslationSchema = z.object({
  language: languageEnum,
  title: z.string().min(1, "Title is required"),
  description: z.string().optional().nullable(),
});

const questionTranslationSchema = z.object({
  language: languageEnum,
  questionText: z.string().min(1, "Question text is required"),
  options: z.array(z.string().min(1)).min(2, "At least 2 options required"),
  explanation: z.string().optional().nullable(),
});

const multiLangQuestionSchema = z.object({
  correctAnswerIndex: z.number().int().min(0, "Invalid correct answer index"),
  translations: z
    .array(questionTranslationSchema)
    .min(1, "Each question must have at least one translation"),
});

const createQuizSchema = z.object({
  categoryId: idSchema,
  translations: z
    .array(quizTranslationSchema)
    .min(1, "At least one quiz translation is required"),
  questions: z
    .array(multiLangQuestionSchema)
    .min(1, "At least one question is required"),
  passingScore: z.number().min(0).optional(),
  totalPoints: z.number().min(1, "Total points is required"),
  timeLimit: z.number().min(1, "Time limit must be positive").optional(), // in minutes
});

const updateQuizSchema = z.object({
  categoryId: idSchema.optional(),
  translations: z
    .array(quizTranslationSchema)
    .min(1, "At least one quiz translation is required")
    .optional(),
  questions: z
    .array(multiLangQuestionSchema)
    .min(1, "At least one question is required")
    .optional(),
  passingScore: z.number().min(0).optional(),
  totalPoints: z.number().min(1, "Total points is required").optional(),
  timeLimit: z.number().min(1, "Time limit must be positive").optional(),
});

module.exports = {
  createQuizSchema,
  updateQuizSchema,
  languageEnum,
};
