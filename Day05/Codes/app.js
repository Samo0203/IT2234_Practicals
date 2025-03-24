const express = require('express');
const app = express();
const port = 3002;

app.get('/',(req,res)=>{
    res.send('Hello Express JS');
});
//http://127.0.0.1:3001/

app.get('/msg',(req,res)=>{
    res.send('Hello IT Students');
});
//http://127.0.0.1:3001/msg

//array of students JSON details

const students = require('./DB/studentdb')


app.get('/stu',(req,res)=>{
    res.send(students);
});

app.get('/stu/:id',(req,res)=>{
    const id = req.params.id
    const result = students.find(student => student.regno === id); // call back function
    //check student is available or not, if not return an error message
    if(result){
        res.send(result);
    }
    else{
        res.status(404).send("Student not found"); //error message
    }
    
});

//filter student by gender
app.get('/stu/gender/:gen',(req,res)=>{
    const gen = req.params.gen
    const result = students.filter(student => student.gender === gen); // call back function
    res.send(result);
});

//filter by name
app.get('/stu/name/:name',(req,res)=>{
    const name = req.params.name
    const result = students.filter(student => student.name === name); // call back function
    res.send(result);
});


app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});