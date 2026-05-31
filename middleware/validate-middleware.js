const validate = (schema) => async (req, res, next) => {
try {
    const parsedBody = await schema.parseAsync(req.body);
    req.body = parsedBody;
    next();
} catch (er) {
    console.log(er);

    const message =
    er.issues?.[0]?.message ||
    er.message ||
    "Validation failed";

    return res.status(400).json({ msg: message });
}
};

module.exports = validate;