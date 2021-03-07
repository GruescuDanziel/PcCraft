/** 
* @module userController 
* @Summary A controller for the user's account, able to do CRUD operations and more.
*/

const express     = require('express');
const router      = express.Router();
const db          = require('../database/database')
const usermdl     = require('../database/models/user')
const bodyParser  = require('body-parser')
const bcrypt      = require('bcrypt');
const jwtManager  = require('./jwtManager');

const urlencodedParser = bodyParser.urlencoded({ extended: false })
const jsonParser       = bodyParser.json() 
const bcryptRounds     = 10

function validateEmail(email) {
  const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return res.test(String(email).toLowerCase());
}

/** 
* Get an user using an email or an username
* @async
* @param {string} userSearchTerm - Brief description of the parameter here. Note: For other notations of data types, please refer to JSDocs: DataTypes command.
* @return {object} JSON Object of the User's data (from the DB)
* @example getUser('JohnDoe')
*/
async function getUser(userSearchTerm){
    let foundUser;
    if(validateEmail(userSearchTerm)){
        foundUser = await usermdl.findOne({email: userSearchTerm})
            .then((dataRes)=>{
                if(dataRes != null){return dataRes}
            });
          }else{
            foundUser = usermdl.findOne({username: userSearchTerm})
                .then((dataRes)=>{
                    if(dataRes != null){return dataRes}
                });}
    console.log(foundUser)
    return foundUser;}


router.post('/signup', jsonParser,(req, res)=>
{
  bcrypt.hash(req.body.password, bcryptRounds, (err, hashed)=>{
      if(!err)
      {
        let usr = new usermdl
        ({
            first_name:   req.body.first_name,
            last_name:    req.body.last_name,
            email:        req.body.email,
            password:     hashed,
            birthdate:    req.body.birthdate,
            location:     req.body.location,
            phoneNumber:  req.body.phoneNumber
        })
        res.send({status: true, message:"User created sucessfully"})
        usr.save();
      }
      else {
        res.send(err)
      }
    })

})

//User login endpoint
router.get('/login',urlencodedParser, (req, res)=>
{
  usermdl.findOne({email: req.query.email})
  .then((dataRes)=>{
      if(dataRes != null)
      {
        bcrypt.compare(req.query.password, dataRes.password, (err, status)=>
          {
            if(status)
            {
            console.log(dataRes)
            const userJwt = jwt.sign({ 
            email : req.query.email},
            process.env.JWT_SECRET);
            
            res.cookie('jwtToken', userJwt, { maxAge: 900000, httpOnly: true})
                .send({
                    name : `${dataRes.last_name} ${dataRes.first_name}`,
                    username : dataRes.username,
                    email : dataRes.email,
                    cookies : req.cookies,
              })
            }
            else {
              res.send('Password not correct')
            }
          })

      }
      else {
        res.send('User does not exists')
      }
  });
})

router.put('/updateUsr', (req, res)=>
{
  bcrypt.hash(req.body.password, bcryptRounds, (err, hashed)=>{
    usermdl.findById({_id: req.body.id})
    .then((dataRes)=>{

        if(dataRes == null)
        {
          res.send("Server error! User not found")
        }
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
    if(dataRes == null)
    {
      res.send({status: true, message: "Account deleted successfully"})
    }
    else {
      res.send({status: false, message: "Account doesn't exists!"})
    }
  })
})


router.get('/resetPass', (req, res)=>{
  
  usermdl.find({email: req.body.email}, (err, usr)=>{

    if(usr != null)
    {
      let resetCode = Math.floor(Math.random() * (999999 - 100000) + 100000)
      let email     = req.body.email
      
      let userJwt = jwt.sign({ 
        email  : email,
        resCode: resetCode
      },process.env.JWT_SECRET);

      res.cookie('resToken', userJwt)
      res.send(userJwt) 
    }
    else{
      res.send("No user found")
    }
  })
})

// jwt Decode
// Update data

/** 
* Hashes a password using BCrypt
* @param {string} newPassword - Password to hash
* @return {string} Hashed password
*/
async function encrypt(newPassword){
  let hashData = '';
  await bcrypt.hash("daniel2002", 10).then(data =>{hashData = data})
  return hashData
}

/** 
* Sends an email to the user with a reset code and then, if the code is valid, 
* it resets the user's password
* @summary Resets user's password
* @param  {object} req - Web request, sent by the client
* @param  {object} res - Web request, sent by the server
*/
function resetPassword(req, res){
  const resToken = req.cookies.resToken
  const verifiedToken = jwtManager.verify(resToken);
  if(verifiedToken){
    encrypt(req.body.password).then(hash =>{
      getUser(verifiedToken.email).then(usr =>{
        console.log(usr);
        usr.password = hash;
        usr.save();
        res.sendStatus(200)
      });
    })  
  }
}
module.exports = router
