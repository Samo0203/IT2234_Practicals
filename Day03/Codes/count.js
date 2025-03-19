//get sum
/*const count = (...n) => {
	let t = 0
	n.forEach((i)=>t=t+i)
	console.log(n)
	console.log(t)
}
count(5,4,3,2,1)*/

const mysum1 = (...n) => {
	return n.reduce((t,i)=>t=t+i)
}
console.log(mysum1(4,5,6,8,2))