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
  
})

router.delete('/rmUser', (req, res)=>
{

})


module.exports = router
