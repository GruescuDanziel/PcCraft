const express = require('express');
const { route } = require('./routerManager');
const router = express.Router();
const db = require('../database/database')
const usermdl = require('../database/models/user')

router.get('/createAcc', (req, res)=>
{
    console.log(req.body.last_name)
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

    usr.save((err)=>
    {
        console.error(err);
    })
    
    res.send('User Created Successfully')
})


module.exports = router