const mongoose = require('mongoose')
const Product = require('../Models/Product')

module.exports = (app) => {
    app.post('/addproduct', async (req, res) => {
        console.log('receiving values')
        console.log(req.body)
        let product = Product({
            title: req.body.title,
            price: req.body.price,
            category: req.body.category,
            subCategory: req.body.subCategory,
            description: req.body.description,
            imageID: req.body.imageID
        })

        product.save((err) => {
            if (err) throw err
            console.log("product added")
            console.log(product)
        })
    })
}
