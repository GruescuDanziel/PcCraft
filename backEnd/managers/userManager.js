const express     = require('express');
const router      = express.Router();
const {loginUser, registerUser, resetPassword, sendPasswordEmail} = require('../controlers/userController')
const bodyParser  = require('body-parser')


const jsonParser       = bodyParser.json() 

router.route("/", jsonParser )
        .get(loginUser)
        .post(registerUser)

router.route("/forgotPassword")
        .get(sendPasswordEmail)
        .post(resetPassword)


module.exports = router
