const mongoose = require('mongoose')
const Product = require('../Models/Product')

module.exports = (app) => {
    app.get('/getProduct', async (req, res) => {
        let products =  await Product.find()
        console.log(products)
        res.status(200).send(products)
    })
}