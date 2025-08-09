// 'use strict';

// const thisKeyword = () => console.log(this);

// thisKeyword();

// const person = {
//   name: "alex",
//   age: 10,
//   myFunction: function () {
//     return () => `${this.name} is ${this.age} years old`
//   },
// };

// const msg = person.myFunction()

// console.log(msg());

// function testStrict(){
//     return `this inside the function is ${this}`
// }

// console.log(testStrict());

// the call method

/**Practice */

console.log(this);

// inside of object -- Implicit binding

const employee = {
  id: 1,
  firstName: "Alex",
  lastName: "b",
  returnThis: function () {
    return this;
  },
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(employee.returnThis());
console.log("Getting full name", employee.getFullName());

const tom = {
  name: "Tom",
  age: 7,
};

const jerry = {
  name: "jerry",
  age: 3,
};

function greetMe(obj) {
  obj.logMessage = function () {
    console.log(`${this.name} is ${this.age} years old`);
  };
}
console.log(tom);
greetMe(tom)

tom.logMessage()

// inside function

function sayName() {
  console.log(this);
}
sayName()

// arrow function