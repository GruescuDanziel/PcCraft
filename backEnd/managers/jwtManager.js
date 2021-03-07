const express = require("express");
const jwt     = require('jsonwebtoken');
const router  = express.Router();

function createUserToken(userData){
    if(userData){
        const jwtJsonObject = {
            username : userData.username,
            name : `${userData.last_name} ${userData.first_name}`,
            email : userData.email};
        return jwt.sign(jwtJsonObject,process.env.JWT_SECRET);
    }
}

function setUserDataInCookies(jwtToken){
    return jwt.verify(jwtToken, process.env.JWT_SECRET)
}


router.post('/startup', (req,res)=>{
    if(req.cookies.jwtToken != null){
    const userData = setUserDataInCookies(req.cookies.jwtTokenreq.cookies.jwtToken)
        res.cookie('username', userData.username, {maxAge : 2000000})
            .cookie('name', userData.name, {maxAge: 20000000})
            .cookie('email', userData.email, {maxAge: 200000000})
            .sendStatus(200);
    }
})
module.exports = {'router' : router,'create' : createUserToken};
