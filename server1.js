const express = require('express');
const app  = express() ;
const db = require('./db');
const PORT = 3000;

const MenuItem = require('./models/MenuItem');
// Responsible for parsing data 
const bodyParser = require('body-parser');
// Middleware
app.use(bodyParser.json());         // Stores data in req.body

app.get('/' , (req , res)=>{
    res.send("Hello Sir Welcome to our Restraunt...")
})

// app.post('/menu' ,async (req, res)=>{

//     try{
//         const data = req.body ; //  Parsed data

//         const newMenu = new MenuItem(data);

//         const response = await newMenu.save() ;
//         console.log("Data saved Successfully");
//         res.status(200).json(response);
//     }
//     catch(err){
//         console.log("Error in saving person",err);
//         res.status(500).json({err:"Server Error"});
//     }
// })
// app.get('/menu' ,async (req, res)=>{

//     try{
//         const data = await MenuItem.find();
//         console.log("Data Fetched Successfully");
//         res.status(201).json(data);
//     }
//     catch(err){
//         console.log("Error in saving person",err);
//         res.status(500).json({err:"Server Error"});
//     }
// })
const menuRoutes = require('./routes/menuItemRoutes');
app.use('/menu', menuRoutes);

app.listen(PORT , (res)=>{
    console.log(`Listening on ${PORT}`);
})