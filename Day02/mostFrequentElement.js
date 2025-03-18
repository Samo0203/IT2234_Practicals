//Find the most frequent element in the array
let arr2 = [4, 8, 3, 4, 3, 2, 1, 8, 4];

let frequency = [];

for (let i = 0; i < arr2.length; i++) {
  frequency[arr2[i]] = (frequency[arr2[i]] || 0) + 1;
}

let maxCount = 0;
let mostFrequentElement;

for (let key in frequency) {
  if (frequency[key] > maxCount) {
    maxCount = frequency[key];
    mostFrequentElement = key;
  }
}

console.log("Most frequent element: " +mostFrequentElement);