const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price:{
        type : Number,
        required : true
    },
    taste:{
        type : String,
        required : true,
        enum : ['sweet','savory','spicy'],

    },
    is_drink:{
        type : Boolean,
        default : true
    },
    ingredients:{
        type : [String],
        default : []
    },
    num_sales :{
        type : Number,
        default : 0
    }
    // hello
    
})
const MenuItem  =  mongoose.model('MenuItem' , menuItemSchema);

module.exports = MenuItem;

// Go to server1.js

// commend added for testing purpose