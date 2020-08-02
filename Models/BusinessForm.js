const mongoose = require('mongoose')

const template = new mongoose.Schema({
    FullName: String,
    Email:String,
    PhoneNumber:String,
    BusinessName:String,
    City:String,
    AdditionalComments:String,
})

const BusinessForm = mongoose.model('BusinessForm', template)

module.exports = BusinessForm
