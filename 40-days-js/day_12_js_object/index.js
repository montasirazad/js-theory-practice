let user = {
  name: "user_1",
  age: 40,
  "is admin": true,
};

user["movie lover"] = true;
user.age = 20;
console.log(user);

const someKey = "age";

console.log(user[someKey]);
console.log(user);

// constructor function

// function Car(name, model) {
//   this.name = name;
//   this.model = model;
// }

// const bmwCar = new Car("BMW", "X!");
// const audiCar = new Car("Audi", "M2");
// console.log(bmwCar);
// console.log(audiCar);

// Object.seal()
// Object.freeze()

//***** */ object destructuring *****

// const student = {
//   name: "John",
//   age: 9,
//   std: 5,
//   subjects: ["Maths", "English", "Biology"],
//   parents: {
//     father: "Brown",
//     mother: "sophia",
//     email: "john@abc.com",
//   },
//   address: {
//     streets: "65/2, brooklyn road",
//     city: "London",
//     country: "UK",
//     zip: 5791,
//   },
// };

// const myArr = Object.entries(student);
// console.log(myArr);

// const { name, age, meal = "bread" } = student;
// const city = student.address.city;

//console.log(name, age, meal);

// const { subjects, numberOfSubjects = subjects.length } = student;
//console.log(numberOfSubjects);

// const { std: standard } = student;
//console.log(standard);

//***** */Nested object destructuring *****

// const {
//   address: { streets },
// } = student;

//console.log(streets);

// function sendEmail({ parents: { email } }) {
//   console.log(
//     `%csend this emil to: ${email}`,
//     "color: green;background-color:white;padding:4px; font-weight: bold;"
//   );
// }

//sendEmail(student);
//console.log("%cThis text is red and bold!", "color: red; font-weight: bold;");

// const getStudent = () => {
//   return {
//     name: "John",
//     age: 9,
//     std: 5,
//     subjects: ["Maths", "English", "Biology"],
//     parents: {
//       father: "Brown",
//       mother: "sophia",
//       email: "john@abc.com",
//     },
//     address: {
//       streets: "65/2, brooklyn road",
//       city: "London",
//       country: "UK",
//       zip: 5791,
//     },
//   };
// };

//**Constructor Function */

function Car(name, model) {
  this.name = name;
  this.model = model;
}

const car_1 = new Car("BMW", "X1");
const car_2 = new Car("Audi", "y1");
// console.log(car_1 instanceof Car);
// console.log(car_2);

const person = new Object();

person.name = "dhrubo";
person.age = 18;

console.log(person);

//**Factory function */

function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hello from ${this.name}`);
    },
  };
}

const user1 = createUser("Dhrubo", 18);

user1.greet();
3;

let profile = {
  name: "azad",
  address: "dhaka",
  message: function () {
    console.log(`${this.name} lives in ${this.address}`);
  },
};

profile.message();

/**Object entries convert object to array*/

const myObj = {
  name: "john",
  age: 10,
};

const myArr = Object.entries(myObj);
console.log(myArr);

/**Convert array to object */

const objEntries = new Map([
  ["name", "john"],
  ["age", 18],
]);

const johnObj = Object.fromEntries(objEntries);
console.log("johnObj = ", johnObj);

/**Object destructuring */
