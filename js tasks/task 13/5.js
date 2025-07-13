let numbers = [23, 5, 89, 1, 17];
let ascending = [...numbers].sort((a, b) => a - b);
console.log("Ascending:", ascending);
let descending = [...numbers].sort((a, b) => b - a);
console.log("Descending:", descending);
