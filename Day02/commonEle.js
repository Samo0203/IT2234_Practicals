a = [4,5,6,3,7]
b = [8,3,2,1,5]
//find the common elements between a and b

console.log("common elements:")
a.forEach(n => {
	b.forEach(m => {
		if(n == m){
			//console.log("common elements:")
			console.log(n,m)
		}
	})
})