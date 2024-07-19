const mongoose = require('mongoose');
// Define Person Schema : 
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true 
    },
    work: {
        type: String,
        required: true,  // This field must be provided.
        enum :['chef' , 'manager' , 'waiter'],
        required: true  // This field must be one of the enum values.
    }, 
    mobile :{
        type: String,
        required: true,
        unique: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    address : {
        type: String,
        
    },
    salary :{
        type: Number,
        required: true
    }
});

// Create Person Model 
const Person = mongoose.model('Person', personSchema);
module.exports = Person;