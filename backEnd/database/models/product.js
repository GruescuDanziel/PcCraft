const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
  price: String,
  source: [String]
})

const Product = mongoose.model('Product', productSchema)

module.exports = { Product, productSchema }
