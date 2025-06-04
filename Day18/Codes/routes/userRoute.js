const express=require('express')
const router = express.Router()
const User = require('../models/User')
const { mongoose } = require('mongoose')
const findFun = require('../services/genericFindService')

/*router.get('/',async (req,res)=>{
    try{
        const results = await User.find()
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
    findFun(res,User)
})

module.exports=router