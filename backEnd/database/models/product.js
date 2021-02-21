const mongoose = require('mongoose')

const CPUSpecSchema = new mongoose.Schema({
  socket: String,
  power: Number,
  numOfCores: Number,
  numOfThreads: Number,
  hasIntegratedGraph: Boolean,
  igraphName: String
})

const GPUSpecSchema

const productSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
  price: String,
  source: [String]
})

const Product = mongoose.model('Product', productSchema)

module.exports = { Product, productSchema }
