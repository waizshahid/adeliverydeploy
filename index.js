const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

require('./Routes/BusinessPage')(app)
require('./Routes/UserRequests')(app)
require('./Routes/ApproveRequest')(app)
require('./Routes/UserSignUp')(app)
require('./Routes/UserSignUp2')(app)
require('./Routes/UserSignUp3')(app)
require('./Routes/addProduct')(app)
require('./Routes/getProduct')(app)
require('./Routes/getUsers')(app)
const users = require("./Routes/api/users")

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

// const db = require('./config/keys').mongoURI
const db = 'mongodb+srv://admin:admin@cluster0.7mcv9.mongodb.net/aDelivery?retryWrites=true&w=majority'
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => console.log('Mongo DB Connected Successfully'))
    .catch(err => console.log(err))

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/shop", users);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})