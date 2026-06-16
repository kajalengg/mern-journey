const { z } = require("zod");

const registerSchema = z.object({
  name: z.string()
    .trim()
    .min(3, "Name must be at least 3 characters long")
    .max(100, "Name must be at most 100 characters long"),

  email: z.string()
  .email("Invalid email address"),


  password: z.string()
  .min(6, "Password must be at least 6 characters long"),


  phone: z.string()
  .min(10, "Phone number must be at least 10 digits long"),
});
 const loginSchema = z.object({
  email: z.string()
  .email("Invalid email address"),

  password: z.string()
  .min(6, "Password must be at least 6 characters long"),
});

module.exports = {
  registerSchema,
  loginSchema
};

