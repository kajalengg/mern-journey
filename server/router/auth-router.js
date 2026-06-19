const express= require('express');
const router = express.Router();
const  k  = require('../controller/auth-controller');
const { registerSchema } = require('../validators/auth-validation');
const validate = require('../middleware/validate-middleware');
const authMiddleware = require('../middleware/auth-middleware');


router.route('/').get(k.home);

router.route('/login').post(k.lo);

router.route('/register').post(validate(registerSchema), k.re);

router.route('/user').get(authMiddleware, k.us);

module.exports = router;