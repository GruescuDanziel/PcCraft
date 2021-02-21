const express = require('express');
const router = express.Router();

//models
const productMdl = require('../database/models/product').Product
const CPUMdl = require('../database/models/product').CPUMdl
const GPUMdl = require('../database/models/product').GPUMdl

router.get('/findProduct', (req, res)=>
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
      let spec = null
      switch (req.body.type) {
        case 'CPU':
            spec = new CPUMdl({
            socket: req.body.CPU_SockType,
            power: req.body.CPU_Pow,
            numOfCores: req.body.CPU_Cores,
            numOfThreads: req.body.CPU_Threads,
            hasIntegratedGraph: req.body.CPU_hasIGraph,
            igraphName: req.body.CPU_IGraphName
          })
          spec.save()

        case 'GPU':
          spec = new GPUMdl({
            "manufacturer": req.body.GPU_manufacturer,
            "series": req.body.GPU_series,
            "interface": req.body.GPU_interface,
            "ports": req.body.GPU_ports,
            "memType": req.body.GPU_memType,
            "memSize": req.body.GPU_memSize,
            "dxSupVer": req.body.GPU_dxSupVer,
            "technologies": req.body.GPU_technology
          })

          break;
        default:
      }

      let product = new productMdl({
        "name": req.body.name,
        "description": req.body.description,
        "price": req.body.price,
        "type": req.body.type,
        "specs": spec,
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
