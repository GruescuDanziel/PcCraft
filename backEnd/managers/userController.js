const express = require('express');
const router = express.Router();
const db = require('../database/database')
const usermdl = require('../database/models/user')
const bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

const loginUser =()=>{
    usermdl.find({email: req.body.email, password : req.body.password}).then((res)=>{
        return res;
    });
}



router.post('/signup', urlencodedParser,(req, res)=>
{
    let usr = new usermdl
    ({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        birthdate: req.body.birthdate,
        location: req.body.location,
        phoneNumber: req.body.phoneNumber
    })

    usr.save();
})

router.post('/login',urlencodedParser, (req, res)=>
{
    
    loginUser()
})

router.put('/updateUsr', (req, res)=>
{
    
})

router.delete('/rmUser', (req, res)=> 
{
    
})


module.exports = router
