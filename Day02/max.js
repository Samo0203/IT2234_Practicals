//Find the maximum number in the Array using forEach loop
let max = 0;
let NumArray = [2,5,9,8,6]

NumArray.forEach(n => {
	/*if(max<n){
		max = n
	}*/
	
	//(max<n)?max=n:n=n
	(max<n) && (max=n)
})

console.log("Max is "+max)