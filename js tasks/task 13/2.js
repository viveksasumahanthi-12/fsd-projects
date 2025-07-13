let str = "programming";
let duplicates = {};
let result = [];

for (let char of str) {
  if (duplicates[char]) {
    duplicates[char]++;
  } else {
    duplicates[char] = 1;
  }
}

for (let key in duplicates) {
  if (duplicates[key] > 1) {
    result.push(key);
  }
}

console.log("Duplicate characters:", result);
