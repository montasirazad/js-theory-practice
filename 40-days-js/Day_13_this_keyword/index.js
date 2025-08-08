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
};


console.log(employee.returnThis());