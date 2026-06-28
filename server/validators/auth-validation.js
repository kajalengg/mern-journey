const { z } = require("zod");

const registerSchema = z.object({
  name: z.string()
    .trim()
    .min(3, "Name must be at least 3 characters long")
    .max(100, "Name must be at most 100 characters long"),

  email: z.string()
    .trim()
    .email("Invalid email address"),

  password: z.string()
    .min(6, "Password must be at least 6 characters long"),

  phone: z.string()
    .trim()
    .regex(/^[0-9]{10}$/, "Phone number must contain exactly 10 digits"),
});

const loginSchema = z.object({
  email: z.string()
    .trim()
    .email("Invalid email address"),

  password: z.string()
    .min(6, "Password must be at least 6 characters long"),
});

module.exports = {
  registerSchema,
  loginSchema,
};