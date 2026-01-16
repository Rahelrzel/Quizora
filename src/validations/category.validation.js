const { z } = require("zod");

const createCategorySchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
});

const updateCategorySchema = z.object({
  name: z.string().min(1, "Name is required").optional(),
  description: z.string().optional(),
});

module.exports = {
  createCategorySchema,
  updateCategorySchema,
};
