let users = [
  { id: 101, name: "Alice" },
  { id: 202, name: "Bob" },
  { id: 303, name: "Charlie" },
  { id: 404, name: "David" }
];
let targetId = 202;
let filteredUser = users.filter(user => user.id === targetId);
console.log("Filtered result:", filteredUser);
