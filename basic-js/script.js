// function Person(first, last, age, eyecolor) {
//   this.first = first;
// }
// const txt = 'hello'

const car = {
  name: "Fiat",
  model: 500,
  weight: "850 kg",
  color: "white",
  start: function () {
    console.log("car has started");
  },
  drive: function () {
    console.log("car is driving");
  },
  details: function () {
    return "This " + this.name + " car is " + this.weight;
  },
};

// console.log(car.details())
// car.id ='110011'
// console.log(car.id);
// if value is assigned directly it is called literal syntax

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  id: 1,
};
