const express=require('express')
const router = express.Router()
const Project = require('../models/Project')
const { mongoose } = require('mongoose')
const findFun = require('../services/genericFindService')

/*router.get('/',async (req,res)=>{
    try{
        const results = await Project.find()
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
}) */

    router.get('/', async (req, res) => {
        findFun(res,Project)
    })

module.exports=router