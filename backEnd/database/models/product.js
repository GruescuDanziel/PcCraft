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

const motherboardSchema = new mongoose.Schema({
  //General
  type: String,         // Ex: mATX / ATX
  socket: String,       // CPU Socket
  ports: [String],      //Supported ports
  audioOutType: String, // Supported Audio output, Ex: Stereo, 5.1, 7.1

  //PCI Slots
  pciSlots: Number,
  pci3Slots: Number,

  //RAM
  memType: String,      //Supported type of memory (Ex: DDR4)
  maxMem: Number,       //Maximum supported memory
  memSlots: Number      //RAM Slots present on the motherboard

})

const caseSchema = new mongoose.Schema({
  type: String,             // Case type (Ex: MiddleTower)
  mbCompatibility: [String],// Motherboard compatibility (Ex: ATX)
  dimensions: String,
  mass: String,
  expansionSlots: Number,
  externalConnectors: [String],
  illumination: String,
  includedFans: Boolean,
  optionalFanSlots: [String]

})

const RAMSchema = new mongoose.Schema({
  model: String,
  type: String,
  capacity: String,
  radiator: String,
  frequency: Number

})


const powerbrickSchema = new mongoose.Schema({
  manufacturer: String,
  conType: String,
  voltage: Number,
  power: Number
})

const productSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
  price: String,
  source: [String],
  specs: Object
})


const Product = mongoose.model('Product'    , productSchema)
const CPUMdl  = mongoose.model('CPU'        , CPUSpecSchema)
const GPUMdl  = mongoose.model('GPU'        , GPUSpecSchema)
const mbMdl   = mongoose.model('Motherboard', motherboardSchema)
const caseMdl = mongoose.model('Case'       , caseSchema)
const RAMmdl  = mongoose.model('RAM'        , RAMSchema)
const pbMdl   = mongoose.model('Powerbrick' , powerbrickSchema)


module.exports = {
  Product,
  CPUMdl,
  GPUMdl,
  caseMdl,
  mbMdl,
  RAMmdl,
  pbMdl,

  productSchema
}
