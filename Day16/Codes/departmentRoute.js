const express=require('express')
const router = express.Router()
const Department = require('../models/Department')
const { mongoose } = require('mongoose')
const Employee = require('../models/Employee')

router.get('/',async (req,res)=>{
    try{
        const results = await Department.find()
        if(results){
            res.status(200).json(results)
        }
        else{
            res.status(404).send("Sorry, No Data Found ! ")
        }
    }
    catch(error){
        console.error(error);
        res.status(500).send("Server Error ! ")
    }
}) 
router.get('/:id',async (req,res)=>{
    try{
        const id = req.params.id
        const results = await Department.findById(id)
        if(results){
            res.status(200).json(results)
        }
        else{
            res.status(404).send("Sorry, No Data Found ! ")
        }
    }
    catch(error){
        console.error(error);
        res.status(500).send("Server Error ! ")
    }
})

// give a department is and get the employees who are working there
router.get('/emp/:did',async (req,res)=>{
    try{
        const did = req.params.did
        // const results = await Employee.find({ departmentId: did }) //without populate
        // const results = await Employee.find({ departmentId: did }).populate("departmentId") //with populate
         const results = await Employee.find({ departmentId: did },
        {name:1,departmentId:1}).populate("departmentId") //only empid, name, dept name
         //manipulate the results
    
        if(results){
            res.status(200).json(results)
        }
        else{
            res.status(404).send("Sorry, No Data Found ! ")
        }
    }
    catch(error){
        console.error(error);
        res.status(500).send("Server Error ! ")
    }
})

//find how many employees are working in a department

//shows the employee count along with each department details

module.exports=router