/** @module jwtManager 
*   @description A controller used for manipulating JWT Tokens
*/

const express = require("express");
const jwt     = require('jsonwebtoken');
const router  = express.Router();

/** 
* Creates a JWT token with user's data
* @param {object} userData - JSON Object from req's body
* @return {string} Returns a signed JWT token
*/

function createUserToken(userData){
    if(userData){
        return jwt.sign(userData,process.env.JWT_SECRET);
    }else{
        return "DATA NOT PRESENT"
    }
}

/** 
* Verify if a token is valid or not
* @param {string} jwtToken - JWT Token to verify
* @return {boolean} Returns true if the token is valid
*/

function verifyToken(jwtToken){
    if(jwt.verify(jwtToken, process.env.JWT_SECRET))
        return true
    else
        return false
}

/** 
* Decodes a JWT token into a JSON
* @param {string} jwtToken - JWT Token to decode
* @return {object} JSON Object with data from the token
*/
function decodeToken(jwtToken){
    return jwt.decode(jwtToken, process.env.JWT_SECRET);
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
module.exports = {'router' : router,'create' : createUserToken, 'verify' : verifyToken , 'decode' : decodeToken};
