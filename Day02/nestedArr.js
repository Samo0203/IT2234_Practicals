//Find the max number in the array using forEach
//print the nested array
//[[1,2,30],[5,6],[8,5,3]]

let nestedArr = [[1,2,30],
				 [5,6],
				 [8,5,3]]
				 
console.log(nestedArr)

//print nested array
/*nestedArr.forEach(n => {
	console.log(n)
})*/

//print elements of nested array one by one
nestedArr.forEach(n => {
	n.forEach((i)=>{
			console.log(i)
		}
	)
})