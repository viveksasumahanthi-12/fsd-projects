let str = "hello";
let targetChar = "l";
let count = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === targetChar) {
    count++;
  }
}
console.log(`Count of '${targetChar}' is:`, count);
