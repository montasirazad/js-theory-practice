/**Basic object */

const person_1 = {
  firstName: "John",
  "last name": "Doe",
  age: 20,
  objMethod: function () {
    console.log(`The full name is ${this.firstName} ${this["last name"]}`);
  },
};

/**Constructor function */

function Car(name, model) {
  (this.name = name), (this.model = model);
}

const bmwCar = new Car("bmw", "a1");
console.log(bmwCar);

/** Factory function */

function fruitDetail(name, color) {
  return {
    name,
    color,
    detail() {
      console.log(`Color of ${this.name} is ${this.color}`);
    },
  };
}

const mangoDetail = fruitDetail("mango", "yellow");
mangoDetail.detail()
const appleDetail = fruitDetail('apple','red')
appleDetail.detail()


