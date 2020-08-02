const nodemailer = require('nodemailer')
const BusinessRequest = require('../Models/BusinessForm')

module.exports = (app) => {

    app.post('/admin/approveRequest', async (req, res)=>{
        console.log('ready to send mail')
        await console.log('getting this '+ req.body.id)

        BusinessRequest.findById(req.body.id, async (err, data) =>{
            if (err) throw err

            const output = `
            <p>Your account has been created #testmail</p>
            `

            let testAccount = await nodemailer.createTestAccount();
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: 'testsample206565@gmail.com', // generated ethereal user
                    pass: 'Testsample123' // generated ethereal password
                }
            });

            // send mail with defined transport object
            let info = {
                from: 'testsample206565@gmail.com', // sender address
                to: data.Email, // list of receivers
                subject: "A-Delivery", // Subject line
                // text: "Hello world?", // plain text body
                html: output // html body
        }

        transporter.sendMail(info, (error, info) => {
            if (error) {
                return console.log(error)
            }
            console.log('Message sent %s', info.messageId)
        })
        })



        return res.status(200).send('success')
    })

}