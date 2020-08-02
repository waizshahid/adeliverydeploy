const mongoose = require('mongoose')
const Customer = require('../Models/Customer')
const Verify = require('../Models/CustomerVerificationCode')
const Nexmo = require('nexmo')
const { v4: uuidv4 } = require('uuid');

const nexmo = new Nexmo({
    apiKey: 'cf26bfc3',
    apiSecret: 'pkW4RFJClw0TY9TR',
});

module.exports = (app) => {

    app.post('/signup', async (req, res) => {

        console.log(req.body)

        const test = await Customer.find({email: req.body.email})
            .then(res => {
                if (res.length === 0) {
                    console.log('didnt find the email')
                    const code = (Math.floor(1000 + Math.random() * 9000))
                    const from = 'aDevilery'
                    const to = req.body.phoneNumber
                    const text = 'Thank You for signing up at Adelivery.com. Your verification code is ' + code

                    nexmo.message.sendSms(from, to, text)

                    const id = uuidv4()
                    console.log(id)
                    const codeRequest = {
                        _id: id,
                        phoneNumber: req.body.phoneNumber,
                        code: code
                    }

                    Verify.create(codeRequest)

                    return {
                        id,
                        message: 'success'
                    }
                } else {
                    console.log('what is')
                }
            })
        console.log('hello')
        console.log(test)

        return res.json(test)
    })
}