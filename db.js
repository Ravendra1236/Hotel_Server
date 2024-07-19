// This file is responsible for the connection between MongoDB and Nodejs

const mongoose = require('mongoose');       // Act as a Bridge between node and mongoose

// Define the MOngoDB connection URL 
// const mongoURL = "mongodb://localhost:27017/hotels" // This will not work sometimes

// Reason : localhost can sometimes resolve to an IPv6 address (::1), which MongoDB might not be listening on.
// 127.0.0.1 always resolves to an IPv4 address, which MongoDB is more likely to be listening on.

// const mongoURL = "mongodb://127.0.0.1:27017/mydatabase"  //  "Replace mydatabse with anything"
const mongoURL = process.env.MONGO_URL

// set up mongoDB connection
// mongoose.connect(mongoURL , {
//     // Mandatory parameters: But in mordern version we dont need them we ca remove them
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
mongoose.connect(mongoURL);


//This object handles events and interact with database
const db = mongoose.connection ;

// Event listeners
db.on('connected' , ()=>{
    console.log("Connected to MongoDB Server");
})

db.on('error' , (err)=>{
    console.error("MongoDB connection error:", err);
})
db.on('disconnected' , ()=>{
    console.log("Disconnected to MongoDB Server");
})


// Export the database 
module.exports = db ;


