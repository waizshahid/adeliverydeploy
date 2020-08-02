const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CustomerVerificationCode = new Schema({
    _id: String,
    phoneNumber: String,
    code: String
})

const Verify = mongoose.model('VerificationRequests', CustomerVerificationCode)

module.exports = Verify