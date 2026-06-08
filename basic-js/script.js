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

console.log(car.details())

// if value is assigned directly it is called literal syntax