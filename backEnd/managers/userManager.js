const express     = require('express');
const router      = express.Router();
const bodyParser  = require('body-parser')
const {loginUser, registerUser} = require('../controlers/userController')

router.route("/")
        .get(loginUser)
        .post(registerUser)


module.exports = router
