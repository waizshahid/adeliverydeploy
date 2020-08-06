const mongoose = require('mongoose')
const Users = require('../Models/Customer')

module.exports = (app) => {
    app.get('/admin/getUsers', async (req, res) => {
        let users = await Users.find()

        console.log(users)
        res.status(200).send(users)
    })
}