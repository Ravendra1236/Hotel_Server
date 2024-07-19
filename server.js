const express = require('express');
const app  = express() ;
const db = require('./db');
const PORT = 3000;

// tutorial after connection

// Responsible for parsing data 
const bodyParser = require('body-parser');
// Middleware
app.use(bodyParser.json());         // Stores data in req.body

app.get('/' , (req , res)=>{
    res.send("Hello Sir Welcome to our hotel...")
})

// POST route to add a person 
// app.post('/person' , (req, res)=>{
//     const data = req.body ; //  Parsed data

//     // const newPerson = new Person(); // Just like a ctor
//     // newPerson.name = data.name;
//     // newPerson.age = data.age;
//     // newPerson.mobile = data.mobile;
//     // newPerson.email = data.email;

//     // It s lenghty process 

//     const newPerson = new Person(data);

//     // Save the data to MongoDB

//     // newPerson.save((err, savedPerson)=>{
//     //     if(err){
//     //         console.error("Error in saving person",err);
//     //         res.status(500).json({err:"Server Error"});
//     //     }
//     //     else{
//     //         console.log("Data saved Successfully.");
//     //         res.status(201).json(savedPerson);
//     //     }
//     // }); 
//     // Nowadays no one uses callBack fncs 
//     // So  we use async await function

// })
// app.post('/person' ,async (req, res)=>{

//     try{
//         const data = req.body ; //  Parsed data

//     const newPerson = new Person(data);

//     const response = await newPerson.save() ;
//     console.log("Data saved Successfully");
//     res.status(201).json(response);
//     }
//     catch(err){
//         console.log("Error in saving person",err);
//         res.status(500).json({err:"Server Error"});
//     }
// })
// app.get('/person' ,async (req, res)=>{

//     try{
//         const data = await Person.find();
//         console.log("Data Fetched Successfully");
//         res.status(201).json(data);
//     }
//     catch(err){
//         console.log("Error in saving person",err);
//         res.status(500).json({err:"Server Error"});
//     }
// })

// // Routing : Using parameters
// app.get('/person/:workType', async (req , res)=>{
//     try{
//         const workType = req.params.workType;
//         if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
//             const response = await Person.find({work:workType});
//             console.log("Data Fetched Successfully");
//             res.status(201).json(response);
//         }else{
//             res.status(500).json(error , 'Server Error');
//         }
//     }catch(err){
//         console.log("Error in saving person",err);
//         res.status(500).json({err:"Server Error"});
//     }
    
// })

// Routing : 

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

app.listen(PORT , (res)=>{
    console.log(`Listening on ${PORT}`);
})