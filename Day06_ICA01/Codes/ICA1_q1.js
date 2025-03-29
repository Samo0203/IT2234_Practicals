function maxPurchase(budget, keyboardPrice, mousePrice) {
    let max = -1;
    
    for (let keyboard of keyboardPrice) {
        for (let mouse of mousePrice) {
            let totalCost = keyboard + mouse;
            if (totalCost <= budget && totalCost > max) {
                max = totalCost;
            }
        }
    }
    
    return max;
}


console.log(maxPurchase(60, [40, 50, 60], [5, 8, 12])); // Output: 58
console.log(maxPurchase(10, [3, 1], [5, 2, 8])); // Output: 9
