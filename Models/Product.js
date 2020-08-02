const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
    },
    price:{
        type: String,
    },
    category:{
        type: String,
    },
    subCategory:{
        type: String,
    },
    description:{
        type: String,
    },
    imageID:{
        type: String,
    }

})

module.exports = Product = mongoose.model('product', ProductSchema)
