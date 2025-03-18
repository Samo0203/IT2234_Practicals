//Define 10 students JSON
//Store it in an Array
let students=[
{regno:'2021/ICT/01',name:'Jisoo',age:21,gender:'Female',course:'IT',gpa:3.82},
{regno:'2021/ICT/02',name:'Jennie',age:22,gender:'Female',course:'IT',gpa:3.75},
{regno:'2021/BIO/01',name:'Kai',age:21,gender:'Male',course:'Bio',gpa:3.51},
{regno:'2021/AMC/01',name:'Rose',age:23,gender:'Female',course:'Maths',gpa:3.63},
{regno:'2021/ICT/03',name:'Lisa',age:22,gender:'Female',course:'IT',gpa:3.58},
{regno:'2021/BIO/02',name:'Felix',age:24,gender:'Male',course:'Bio',gpa:3.37},
{regno:'2021/BIO/03',name:'JK',age:21,gender:'Male',course:'Bio',gpa:3.23},
{regno:'2021/ICT/04',name:'Jimin',age:22,gender:'Male',course:'IT',gpa:3.78},
{regno:'2021/AMC/02',name:'Oleve',age:22,gender:'Male',course:'Maths',gpa:3.12},
{regno:'2021/AMC/03',name:'Somi',age:23,gender:'Female',course:'Maths',gpa:2.59},
]
console.log(students)

//Find the female students
let femaleSt = [];
for (let i=0;i<students.length;i++) {
    if (students[i].gender == 'Female') {
        femaleSt.push(students[i]);
    }
}
console.log("Female Students:", femaleSt);

//Find the students who are following IT course
let itSt = [];
for (let j=0;j<students.length;j++) {
    if (students[j].course == 'IT') {
        itSt.push(students[j]);
    }
}
console.log("IT Students:", itSt);

//Find the max and average GPA among the students
let totalGPA = 0;
let maxGPA = students[0].gpa;

for (let k=0;k<students.length;k++) {
    totalGPA += students[k].gpa;
    if (students[k].gpa>maxGPA) {
        maxGPA = students[k].gpa;
    }
}

let avgGPA = totalGPA / students.length;
console.log("Max GPA:", maxGPA);
console.log("Average GPA:", avgGPA.toFixed(2));
