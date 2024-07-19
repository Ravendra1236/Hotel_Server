const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

// Get all menu items: 

router.post('/' ,async (req, res)=>{

    try{
        const data = req.body ; //  Parsed data

        const newMenu = new MenuItem(data);

        const response = await newMenu.save() ;
        console.log("Data saved Successfully");
        res.status(200).json(response);
    }
    catch(err){
        console.log("Error in saving person",err);
        res.status(500).json({err:"Server Error"});
    }
})
router.get('/' ,async (req, res)=>{

    try{
        const data = await MenuItem.find();
        console.log("Data Fetched Successfully");
        res.status(201).json(data);
    }
    catch(err){
        console.log("Error in saving person",err);
        res.status(500).json({err:"Server Error"});
    }
})
// enum : ['sweet','savory','spicy']
router.get('/:tasteType', async (req , res)=>{
    try{
        const tasteType = req.params.tasteType;
        if(tasteType == 'spicy' || tasteType == 'savory' || tasteType== 'spicy'){
            const response = await MenuItem.find({taste:tasteType});
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
module.exports = router;