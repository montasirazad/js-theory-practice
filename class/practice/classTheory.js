class Car {
  constructor(name, model, cc) {
    this.name = name;
    this.model = model;
    this.cc = cc;
  }
  myFunction(cmnt) {
    console.log(
      `Name of the car is: ${this.name},model of year:${this.model} and ${cmnt}`
    );
  }
}

const car1 = new Car("bmw", 2000, "1500 cc");
const car2 = new Car("tata", 2010, "2500 cc");
console.log(car1.myFunction('it is a nice car'));
