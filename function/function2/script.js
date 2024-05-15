// function myFunction(a, b, c) {
//     console.log(arguments.length);
// }

// (() => {
//     console.log(123);
// })()

// myFunction(2,3,4)

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const azad = new Person("azad", 30);
console.log(azad);
