const express = require('express');
const app =express();
const port=3004;
const mongoose = require('mongoose')
const errorHandleMid = require('./middlewares/errorHandler')

const userrt= require('./routes/userRoute')
const projectrt= require('./routes/projectRoute')
const taskrt= require('./routes/taskRoute')


app.use(express.json())
app.use(errorHandleMid)
app.use('/user',userrt)
app.use('/task',taskrt)
app.use('/Project',projectrt)

mongoose.connect('mongodb://localhost:27017/PMinfoDB').then(()=>{
    console.log("Database connected")
}).catch((error)=>{
    console.error(error);
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})