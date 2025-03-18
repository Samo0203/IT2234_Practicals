//Array
let NumArray = [2,5,9,8,6]
let CharArr = ['a','e','i','o','u']
let StringArr = ["Apple","Orange","Mango","Grapes"]
let FloatArr = [1.2,3.4,7.5,6.8,9.0]


console.log(NumArray)
console.log(CharArr)
console.log(StringArr)
console.log(FloatArr)

console.log("Elements using for loop: ")
for(let i = 0; i < NumArray.length;i++){
	console.log(NumArray[i])
}

console.log("Elements using forEach loop: ")
NumArray.forEach(n => {
	console.log(n)
})