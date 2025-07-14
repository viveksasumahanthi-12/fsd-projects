class Animal {
  constructor(name, gender, disease) {
    this.name = name;
    this.gender = gender;
    this.disease = disease;
  }
  walk() {
    console.log(`${this.name} is walking.`);
  }
  eat() {
    console.log(`${this.name} is eating.`);
  }
  climb() {
    console.log(`${this.name} is climbing.`);
  }
}
const monkey = new Animal("George", "Male", "None");
console.log("Name:", monkey.name);
console.log("Gender:", monkey.gender);
console.log("Disease:", monkey.disease);
monkey.walk();
monkey.eat();
monkey.climb();
