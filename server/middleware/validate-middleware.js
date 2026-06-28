const { ZodError } = require("zod");

const validate = (schema) => async (req, res, next) => {
  try {
    req.body = await schema.parseAsync(req.body);
    next();
  } catch (err) {
    if (err instanceof ZodError) {
      return next({
        status: 422,
        message: "Validation Failed",
        extraDetail: err.issues[0].message,
      });
    }

    next(err);
  }
};

module.exports = validate;