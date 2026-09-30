// Construction function
function Car(name, model) {
  this.name = name;
  this.model = model;
  this.func = function () {
    console.log(`Name: ${this.name} ---Model: ${this.model}`);
  };
}

const bmwCar = new Car("bmw", "x1");
const audiCar = new Car("audi", "a8");
console.log(bmwCar.func());
// console.log(audiCar instanceof Car);

const person = new Object();
person.name = "john";
person.age = 20;
// console.log(person);

// factory function
function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      // console.log(this.name);
    },
  };
}

const user1 = createUser("bob", 11);
// console.log(user1);
user1.greet();

let profile = {
  name: "tapas",
  company: "CreoWis",
  message: function () {
    // console.log(`${this.name} works at ${this.company}`);
  },
  address: {
    city: "Bangalore",
    pin: 56032,
    state: "Karnataka",
    country: "India",
    greeting: function () {
      // console.log("Welcome to India");
    },
  },
};
const myArr = Object.entries(profile);
console.log(myArr);
// in operator

// console.log("line no 50: ", "salary" in profile);

for (const key in profile) {
  // console.log(key);
  const value = profile[key];
  // console.log(value);
}

// console.log(Object.keys(profile));

const source = { a: 3, b: 4 };
const target = { q: 1, p: 2 };

const returnObj = Object.assign(target, source);
// console.log(returnObj);
