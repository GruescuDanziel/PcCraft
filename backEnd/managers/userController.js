const express     = require('express');
const router      = express.Router();
const db          = require('../database/database')
const usermdl     = require('../database/models/user')
const bodyParser  = require('body-parser')
const bcrypt      = require('bcrypt')
const jwtManager  = require('./jwtManager')

router.post('/signup',(req, res)=>{
    let usr = new usermdl
    ({
        username : req.body.username,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
    })
  
    usermdl.findOne({email: req.body.email})
        .then((dataRes)=>{
            if(dataRes != null){res.send("account was taken");}
            else {res.send("Account created");}
        });
    bcrypt.hash(req.body.password, 10, (err, hashed)=>{
        if(!err)
        {
            let usr = new usermdl
            ({
                first_name:   req.body.first_name,
                last_name:    req.body.last_name,
                email:        req.body.email,
                username:     req.body.username,
                password:     hashed,
                birthdate:    req.body.birthdate,
                location:     req.body.location,
                phoneNumber:  req.body.phoneNumber
            })

            console.log(usr);
            usr.save();
        }
        else {
            res.send(err)
        }
    })
})

//User login endpoint
router.get('/login', (req, res)=>
{
    usermdl.findOne({email: req.query.email})
        .then((dataRes)=>{
            if(dataRes != null)
            {
                bcrypt.compare(req.query.password, dataRes.password, (err, status)=>
                    {
                        if(status){
                            const userJwt = jwtManager.create({
                                username : dataRes.username,
                                email : dataRes.email,

                            });
                            const name = dataRes.first_name + " " + dataRes.last_name;
                            console.log(userJwt)
                            res.cookie('userJwt', userJwt, { expires: new Date(Date.now() + 900000), httpOnly: true, secure: true })
                                .json({
                                    "username" : dataRes.username,
                                    "name" : name,
                                    "email" : dataRes.email,
                                    "succes" : "Logged in!"
                                })
                        }
                        else{res.send('Password not correct')}
                    })
            }
            else {res.send('User does not exists')}
        });
})


router.put('/updateUsr', (req, res)=
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
module.exports = router
