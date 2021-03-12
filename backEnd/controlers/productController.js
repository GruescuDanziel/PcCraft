const productMdl  = require('../database/models/product').Product
const productCreator = require("./productModelCreator");


async function getProduct(req, res){
    const productData = {Name : req.body.name}
    productMdl.find({
        name: {"$regex": productData.Name, "$options": "i"}
    }, (err, prod)=>{
        res.send(prod)
    })
}

function makeProduct(req, res){
    const productData = req.body;
    const spec = productCreator[productData.type](productData);
    const product = new productMdl({
        name:          productData.name,
        description:   productData.description,
        price:         productData.price,
        type:          productData.type,
        specs:         spec,
        rating:        0,
        comments:      [],
        source:        productData.source
    })
    product.save();
    res.send(200);
}


module.exports = {
    getProduct : getProduct,
    makeProduct : makeProduct
};
