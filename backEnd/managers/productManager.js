const express = require('express');
const router = express.Router();
const productMdl = require('../database/models/product').Product

router.get('/getProducts', (req, res)=>
{
  let Name = req.body.name
  let category = req.body.Category

  productMdl.find({
      name: {"$regex": Name, "$options": "i"}
  }, (err, prod)=>{
    res.send(prod)
  })
})

router.post('/createProduct', (req, res)=>
{
  productMdl.findOne({name: req.body.name}, (err, result)=>
  {
    if(result == null)
    {
      let product = new productMdl({
        "name": req.body.name,
        "description": req.body.description,
        "price": req.body.price,
        "source": req.body.source
      })

      res.send({status: true, message: "Product registered successfully!"})
      product.save()
    }
    else {
     res.send({status: false, message: "Product already exists!"})
    }

  })
})

module.exports = router
