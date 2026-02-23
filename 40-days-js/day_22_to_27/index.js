const time = 2000;
// console.log("start");
// setTimeout(() => {
//   console.log(`Executing after ${time} sec`);
// }, time);

// console.log("end");

function greet(name, callback) {
  console.log(`Hi ${name}`);
  setTimeout(() => {
    callback();
  }, time);
  console.log("i am still hanging here ");
}

function sayBye() {
  console.log("bye");
}

greet("john", sayBye);
