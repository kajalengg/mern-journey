const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized. Token not provided.",
        });
    }

    const jwtToken = token.replace("Bearer ", "").trim();

    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET);

        const userData = await User.findOne({
            email: isVerified.email,
        }).select("-password");

        if (!userData) {
            return res.status(401).json({
                message: "User not found.",
            });
        }

        req.user = userData;
        req.token = jwtToken;
        req.userID = userData._id;

        next();
    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized. Invalid or expired token.",
        });
    }
};

module.exports = authMiddleware;