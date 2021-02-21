const mongoose = require('mongoose')

const CPUSpecSchema = new mongoose.Schema({
  socket: String,
  power: Number,
  numOfCores: Number,
  numOfThreads: Number,
  hasIntegratedGraph: Boolean,
  igraphName: String
})

const productSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
  price: String,
  source: [String],
  specs: Object
})

const Product = mongoose.model('Product', productSchema)
const CPUMdl  = mongoose.model('CPU', CPUSpecSchema)

module.exports = { Product, CPUMdl,productSchema }
