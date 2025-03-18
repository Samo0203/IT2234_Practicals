//Q1 - Print numbers 1 to 10
console.log("Print numbers 1 to 10:");

for(var i=1; i<=10; i++)
{
	console.log(i);
}

//Q2 - Print only odd numbers
console.log("Print only odd numbers:");

for(var j=1; j<=10; j++)
{
	if(j % 2 == 1)
	{
		console.log(j);
	}
}

//Q3 - Print the numbers in reverse
console.log("Print the numbers in reverse")

for(var i=10; i>=1; i--)
{
	console.log(i);
}


//Q4 - Print the numbers in left and right 4321-5-9876
console.log("Print the numbers in left to right 4321-5-9876")

var i = 9
var mid = parseInt(i/2) + 1;


for(var j= mid - 1; j>0; j--)
{
	console.log(j)
}

console.log(mid);

for(var j = i; j>mid; j--)
{
	console.log(j)
}
