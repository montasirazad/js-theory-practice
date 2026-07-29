class Food {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  details() {
    console.log(`Name: ${this.name} -- Price: ${this.price}`);
  }
}

const pasta = new Food("pasta", 300);
console.log(pasta);
pasta.details();

// let person = {};
// person.name = "A";
// person.age = 10;

// person.eat = function () {
//   console.log(`person is eating`);
// };
// person["sleep"] = function () {
//   console.log(`person is sleeping`);
// };

// console.log(person);

// function Person(name, age) {
//   let person = {};
//   person.name = name;
//   person.age = age;
//   person.eat = function () {
//     console.log(`person is eating`);
//   };
//   person["sleep"] = function () {
//     console.log(`person is sleeping`);
//   };
//   return person;
// }

// const john = Person("john", 10);
// const doe = Person("doe", 30);
// console.log(john);
