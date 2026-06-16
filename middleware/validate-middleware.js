const validate = (schema) => async (req, res, next) => {
try {
    const parsedBody = await schema.parseAsync(req.body);
    req.body = parsedBody;
    next();
} catch (er) {
    const status = 422;
    const message = "Failed to validate";
    const extraDetail = er.issues && er.issues[0] ? er.issues[0].message : er.message;
    const error = {
        status,
        message,
        extraDetail,
    };

    console.log(error);

    next(error);
    
}
};

module.exports = validate;