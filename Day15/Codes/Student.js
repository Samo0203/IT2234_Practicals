const mongoose = require('mongoose')
const studentSchema= new mongoose.Schema({
    _id:{type:String,require:true},
    name:{type:String,require:true},
    date_of_birth:{type:Date},
    gender:{type:String},
    degreeId:{
        type:String,
        require:true,
        ref:'Degree'
    },
    enroled_courses:[{type:mongoose.Types.ObjectId,ref:'courses'}]
})

const Student = mongoose.model('students',studentSchema)
const kolins = new Student({
    _id:'2021ICT01',
    name:'Peter Kolins',
    date_of_birth:'01-05-1995',
    gender:'male',
    degreeId:'FAS2021ICT',
    enroled_courses:['682eb9d6b82cee2c119a7ed9','682ebb0326f314a9ab178bf2']
})
//kolins.save()
module.exports=Student