const mongoose = require('mongoose')
const Customer = require('../Models/Customer')
const passport = require('passport')
const bcrypt = require('bcryptjs')

module.exports = (app) => {
    app.post('/confirm', async (req, res) => {
        const status = 0
        Customer.findOne({email: req.body.email}).then(user => {
            if (user) {
                status : 2
                return res.status(400).json({email: "Email already exists"})
            }
            else {
                let customer = new Customer({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: req.body.password,
                    phoneNumber: req.body.phoneNumber,
                    imageID: req.body.imageID
                })

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(customer.password, salt, (err, hash) => {
                        if (err){
                            console.log(err)
                        }
                        customer.password = hash
                        console.log(customer)
                        customer.save()
                            .then(customer => ({status: 201}))
                            .catch(err => ({status : 400}))
                    })
                })

            }
        })
        console.log(status)
        return res.status(status)
    })
}