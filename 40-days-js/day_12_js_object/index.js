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

function Car(name, model) {
  this.name = name;
  this.model = model;
}

const bmwCar = new Car("BMW", "X!");
const audiCar = new Car("Audi", "M2");
// console.log(bmwCar);
// console.log(audiCar);

// Object.seal()
// Object.freeze()

//***** */ object destructuring *****

const student = {
  name: "John",
  age: 9,
  std: 5,
  subjects: ["Maths", "English", "Biology"],
  parents: {
    father: "Brown",
    mother: "sophia",
    email: "john@abc.com",
  },
  address: {
    streets: "65/2, brooklyn road",
    city: "London",
    country: "UK",
    zip: 5791,
  },
};

 
const myArr= Object.entries(student)
console.log(myArr);

const { name, age, meal = "bread" } = student;
const city = student.address.city;

//console.log(name, age, meal);

const { subjects, numberOfSubjects = subjects.length } = student;
//console.log(numberOfSubjects);

const { std: standard } = student;
//console.log(standard);

//***** */Nested object destructuring *****

const {
  address: { streets },
} = student;

console.log(streets);

function sendEmail({ parents: { email } }) {
  console.log(
    `%csend this emil to: ${email}`,
    "color: green;background-color:white;padding:4px; font-weight: bold;"
  );
}

//sendEmail(student);
//console.log("%cThis text is red and bold!", "color: red; font-weight: bold;");

const getStudent = () => {
  return {
    name: "John",
    age: 9,
    std: 5,
    subjects: ["Maths", "English", "Biology"],
    parents: {
      father: "Brown",
      mother: "sophia",
      email: "john@abc.com",
    },
    address: {
      streets: "65/2, brooklyn road",
      city: "London",
      country: "UK",
      zip: 5791,
    },
  };
};
