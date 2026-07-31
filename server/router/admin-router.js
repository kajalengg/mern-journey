const express = require("express");
const router = express.Router();

const { userr, ser, con,deleteUserById } = require("../controller/admin-controller");

const authMiddleware = require("../middleware/auth-middleware");
const adminMiddleware = require("../middleware/admin-middleware");

router.get("/users", authMiddleware, adminMiddleware, userr);

router.route('/users/delete/:id')
.delete(authMiddleware,adminMiddleware,deleteUserById);

router.get("/services", authMiddleware, adminMiddleware, ser);
router.get("/contacts", authMiddleware, adminMiddleware, con);

module.exports = router;