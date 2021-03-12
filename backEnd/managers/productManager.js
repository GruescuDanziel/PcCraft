const express     = require('express');
const router      = express.Router();
const {getProduct , makeProduct} = require("../controlers/productController")

router.router('/', jsonParser)
    .get(getProduct)
    .post(makeProduct)

module.exports = router
