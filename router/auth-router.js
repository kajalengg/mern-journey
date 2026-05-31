const express= require('express');
const router = express.Router();
const  k  = require('../controller/auth-controller');
const registerSchema = require('../validators/auth-validation');
const validate = require('../middleware/validate-middleware');


router.route('/').get(k.home);

router.route('/login').post(k.lo);

router.route('/register').post(validate(registerSchema), k.re);

module.exports = router;