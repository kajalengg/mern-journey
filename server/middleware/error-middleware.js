const errorMiddleware = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "BACK ERROR";
    const extraDetail = err.extraDetail || "Error backend";

    return res.status(status).json({message, extraDetail});

}
module.exports = errorMiddleware;