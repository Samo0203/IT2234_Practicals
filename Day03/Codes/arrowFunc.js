//arrow function

/*const msg = () => {return ("Hello JS")}
console.log(msg)*/

const msg = () => {return console.log("Hello JS")}
msg()

//write an arrow function to sum 2 numbers

const sum = (a,b) => {return a+b}
console.log(sum(5,6))

//default parameter
const mult = (a,b=2) => {return a*b}
console.log(mult(4,5))
console.log(mult(4))

//Rest parameter
const mysum = (...n) =>{
	console.log(n)
}

mysum(4,5,6,89,2)

//callback function
//a function passed as an argument
const greet = (msg,fun) => {
	console.log("Hi.. "+msg)
	//myName("David")
	fun()
}
//const myName = (name) => {console.log("My name is "+name)}

greet("Good morning",() => {console.log("My name is David")})

//function in function
const multwo = (n)=>n*2

const myarr = (mul,...n)=>{
	n.forEach((i)=>console.log(mul(i)))
}

myarr(multwo,4,5,6,8,2)