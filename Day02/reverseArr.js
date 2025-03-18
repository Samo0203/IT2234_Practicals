//reverse the elements of array using push and pop
//a b c d  -> d c b a 
let arr4 = ['a', 'b', 'c', 'd'];
let reverseArr4 = [];

console.log("Array: " + arr4);

for (let i = arr4.length; i > 0; i--) {
    reverseArr4.push(arr4.pop());
}

console.log("Reversed Array: " + reverseArr4);
