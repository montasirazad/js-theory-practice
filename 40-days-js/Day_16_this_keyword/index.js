'use strict';

const thisKeyword = () => console.log(this);

thisKeyword();

const person = {
  name: "alex",
  age: 10,
  myFunction: function () {
    return () => `${this.name} is ${this.age} years old`
  },
};

const msg = person.myFunction()

console.log(msg());

function testStrict(){
    return `this inside the function is ${this}`
}

console.log(testStrict());