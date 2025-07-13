let str = ' gfuh ieiuei ';
let lettersOnly = str.replace(/[^a-zA-Z]/g, '');
let firstFive = lettersOnly.slice(0, 5);
console.log(firstFive);
