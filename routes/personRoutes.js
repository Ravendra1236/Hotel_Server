const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');
//./../models/Person means you start in the current directory (.), go up one level to the parent directory (..), and then navigate to the models directory and within that directory to the Person file or directory.
router.post('/' ,async (req, res)=>{

    try{
        const data = req.body ; //  Parsed data

    const newPerson = new Person(data);

    const response = await newPerson.save() ;
    console.log("Data saved Successfully");
    res.status(201).json(response);
    }
    catch(err){
        console.log("Error in saving person",err);
        res.status(500).json({err:"Server Error"});
    }
})
router.get('/' ,async (req, res)=>{

    try{
        const data = await Person.find();
        console.log("Data Fetched Successfully");
        res.status(201).json(data);
    }
    catch(err){
        console.log("Error in saving person",err);
        res.status(500).json({err:"Server Error"});
    }
})

// Routing : Using parameters
router.get('/:workType', async (req , res)=>{
    try{
        const workType = req.params.workType;
        if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
            const response = await Person.find({work:workType});
            console.log("Data Fetched Successfully");
            res.status(201).json(response);
        }else{
            res.status(500).json(error , 'Server Error');
        }
    }catch(err){
        console.log("Error in saving person",err);
        res.status(500).json({err:"Server Error"});
    }
    
})
router.put('/:id', async (req , res)=>{
    try{
        const personId = req.params.id;
        const data = req.body;

        const response = await Person.findByIdAndUpdate(personId, data, {new: true , runValidators: true});

        if(!response){
            return res.status(404).json({err: 'Person not found'});
        }

        console.log("Data updated Successfully");
        res.status(201).json(response);
    }catch(err){
        console.log("Error in updating person",err);
        res.status(500).json({err:"Server Error"});
    }
})
router.delete('/:id', async (req , res)=>{
    try{
        const personId = req.params.id;

        const response = await Person.findByIdAndDelete(personId);

        if(!response){
            return res.status(404).json({err: 'Person not found'});
        }

        console.log("Data Deleted Successfully");
        res.status(201).json(response);
    }catch(err){
        console.log("Error in deleting person",err);
        res.status(500).json({err:"Server Error"});
    }
})

module.exports = router ;