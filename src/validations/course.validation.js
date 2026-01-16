const { z } = require("zod");

const createCourseSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  contentUrl: z.string().url("Invalid URL").optional().or(z.literal("")),
  thumbnail: z.string().url("Invalid URL").optional().or(z.literal("")),
});

const updateCourseSchema = z.object({
  title: z.string().min(1, "Title is required").optional(),
  description: z.string().optional(),
  contentUrl: z.string().url("Invalid URL").optional().or(z.literal("")),
  thumbnail: z.string().url("Invalid URL").optional().or(z.literal("")),
});

module.exports = {
  createCourseSchema,
  updateCourseSchema,
};
