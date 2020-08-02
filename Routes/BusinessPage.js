const mongoose = require('mongoose')
const BusinessForm = require('../Models/BusinessForm')

module.exports = (app) => {

    app.post('/business', async(req, res)=>{
        let form = await BusinessForm.create(req.body)
        console.log(req.body)
        return res.status(201).send({
            error: false,
            form
        })
    })

}