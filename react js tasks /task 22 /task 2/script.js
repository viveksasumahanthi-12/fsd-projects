let person = {
  name: "Alice",
  age: 25,
  city: "New York",
  profession: "Designer"
};

function displayObject(obj, elementId) {
  const container = document.getElementById(elementId);
  container.innerHTML = '';
  for (let key in obj) {
    const p = document.createElement('p');
    p.textContent = `${key}: ${obj[key]}`;
    container.appendChild(p);
  }
}

displayObject(person, "original");
person.age = 26;
person.city = "Chicago";
displayObject(person, "updated");
