const express     = require('express');
const router      = express.Router();
const db          = require('../database/database')
const usermdl     = require('../database/models/user')
const bodyParser  = require('body-parser')
const bcrypt      = require('bcrypt')
const jwtManager  = require('../managers/jwtManager')

function validateEmail(email) {
  const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return res.test(String(email).toLowerCase());
}

async function getUser(userSearchTerm){
    let foundUser;
    if(validateEmail(userSearchTerm)){
        foundUser = await usermdl.findOne({email: userSearchTerm})
            .then((dataRes)=>{
                if(dataRes != null){return dataRes}
            });
    }else{
        foundUser = usermdl.findOne({email: userSearchTerm})
            .then((dataRes)=>{
                if(dataRes != null){return dataRes}
            });}
    return foundUser;}


function makeUser(userData){
    return new usermdl({
        first_name:   userData.first_name,
        last_name:    userData.last_name,
        email:        userData.email,
        username:     userData.username,
        password:     userData.password,
        birthdate:    userData.birthdate,
        location:     userData.location,
        phoneNumber:  userData.phoneNumber})
}

function createUser(req){
    let userData = req.body;
    userData.password  = hashPass(userData.password);
    const newUser = makeUser(userData);
    newUser.save()
}

function makeCookies(cookieName, cookieValue, expiration, httpOnlyState, secureState, res){
    res.cookie(
        cookieName, 
        cookieValue, 
        {   maxAge  : expiration, 
            httpOnly:httpOnlyState, 
            secure: secureState
        })
}

function loginUser(req, res){
    const user = getUser(req.query.email);
    // const compareStatus = bcManager.compareHash(req.body.password, user.password);
    if(user ){
        const jwtToken = jwtManager.create({"username" : user.username})
        makeCookies('jwtToken', jwtToken,2592000, true, true, res)
        res.sendStatus(200);}
}


router.put('/updateUsr', (req, res)=>
    {
        bcrypt.hash(req.body.password, 10, (err, hashed)=>{
            usermdl.findById({_id: req.body.id})
                .then((dataRes)=>{

                    if(dataRes == null){res.send("Server error! User not found")}
                    else {
                        res.send("Data changed successfully")
                        dataRes.email       = req.body.email      ? req.body.email      : dataRes.email
                        dataRes.password    = req.body.password   ? hashed              : dataRes.password
                        dataRes.first_name  = req.body.first_name ? req.body.first_name : dataRes.first_name
                        dataRes.last_name   = req.body.last_name  ? req.body.last_name  : dataRes.last_name
                        dataRes.location    = req.body.location   ? req.body.location   : dataRes.location

                        dataRes.save((err)=>{console.log(err)})
                    }
                })
        })
    })
router.delete('/rmUser', (req, res)=>
    {
        usermdl.findByIdAndRemove({_id: req.body.id})
            .then((dataRes)=>{
                if(dataRes == null){res.send({status: true, message: "Account deleted successfully"})}
                else {res.send({status: false, message: "Account doesn't exists!"})}
            })
    })
module.exports = {registerUser : createUser, loginUser : loginUser}
