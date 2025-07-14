function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero!";
  }
  return a / b;
}
console.log("Result:", divide(10, 2));
console.log("Result:", divide(10, 0));
