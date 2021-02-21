const express = require('express');
const router = express.Router();
const productMdl = require('../database/models/product').Product


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
