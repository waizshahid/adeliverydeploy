const mongoose = require('mongoose')
const BusinessForm = require('../Models/BusinessForm')

module.exports = (app) => {

    app.get('/admin/UserRequests', async (req, res)=>{
        console.log('getting request')
        let form = await BusinessForm.find()
        console.log(form)
        return res.status(200).send(form)
    })

}