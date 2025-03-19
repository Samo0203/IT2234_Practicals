//write recursive function to print numbers from 1 to n
function recursiveNum(n){
	if(n==0){
		return -1
	}
	else{
		console.log(n)
		recursiveNum(n-1)
	}
}
console.log(recursiveNum(10))