const express = require('express');
const router = express.Router();
const db = require('../database/database')
const usermdl = require('../database/models/user')
const bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

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

    console.log("Created user var")
    usr.save();
})

//User login endpoint
router.get('/login',urlencodedParser, (req, res)=>
{
  usermdl.findOne({email: req.body.email})
  .then((dataRes)=>{
      if(dataRes != null)
      {
        res.send(`Logged in as ${dataRes.email}`)
      }
      else {
        res.send('User does not exists')
      }
  });
})

router.put('/updateUsr', (req, res)=>
{
  usermdl.findById({_id: req.body.id})
  .then((dataRes)=>{

      if(dataRes == null)
      {
        res.send("Server error! User not found")
      }
      else {
        res.send("Data changed successfully")

        dataRes.email = req.body.email ? req.body.email : dataRes.email
        dataRes.password = req.body.password ? req.body.password : dataRes.password
        dataRes.first_name = req.body.first_name ? req.body.first_name : dataRes.first_name
        dataRes.last_name = req.body.last_name ? req.body.last_name : dataRes.last_name
        dataRes.location = req.body.location ? req.body.location : dataRes.location


        dataRes.save((err)=>{console.log(err)})
      }
  });
})

router.delete('/rmUser', (req, res)=>
{
  usermdl.findByIdAndRemove({_id: req.body.id})
  .then((dataRes)=>{
    res.send({status: true, message: "Account deleted successfully"})
  })
})


module.exports = router
