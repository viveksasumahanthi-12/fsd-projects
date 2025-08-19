let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 }
];

function displayArray(arr, elementId) {
  const container = document.getElementById(elementId);
  container.innerHTML = '';
  arr.forEach((user, index) => {
    const p = document.createElement('p');
    p.textContent = `${index}: Name = ${user.name}, Age = ${user.age}`;
    container.appendChild(p);
  });
}

displayArray(users, "original");
users[2].age = 36;
displayArray(users, "updated");
