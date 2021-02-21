const mongoose = require('mongoose')

const CPUSpecSchema = new mongoose.Schema({
  socket: String,
  power: Number,
  numOfCores: Number,
  numOfThreads: Number,
  hasIntegratedGraph: Boolean,
  igraphName: String
})

const GPUSpecSchema = new mongoose.Schema({
  manufacturer: String, // Is manufactured by a different company (Ex: MSI)
  series: String,       // Ex: GTX 1000 / RTX 3000 / Radeon
  interface: String,    // PCI-E type
  ports: [String],      // Ex: 4x HDMI / 1 VGA / 2x Displayport
  memType: String,      // Memory type. Ex: GDDR5
  memSize: Number,      // The capacity of the Memory (Ex: 4Gb)
  dxSupVer: Number,     // The supported DirectX version (Ex: 12)
  technologies: [String]// Ex: nVidia CUDA/PhysX
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
const GPUMdl  = mongoose.model('GPU', GPUSpecSchema)


module.exports = { Product, CPUMdl, GPUMdl,productSchema }
