const mongoose = require('mongoose')
const Verify = require('../Models/CustomerVerificationCode')

module.exports = (app) => {

    app.post('/verify', async (req, res) => {

        console.log(req.body)

        // const test = await Customer.find({email: req.body.email})
        //     console.log('hello')
        // console.log(test)

        await Verify.findById(req.body.codeReq, (err, data) => {
            if (err) throw err

            if (req.body.codeReq === data._id){
                if(req.body.fourdigitcode === data.code){
                    return res.send('true')
                }
                // return res.send('hello')
                else
                    return res.send('false')
            }
        })


        // return res.send(status)
    })
}