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
