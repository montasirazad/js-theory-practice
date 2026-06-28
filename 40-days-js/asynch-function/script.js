function hello() {
  setTimeout(() => {
    console.log("line 2");
  }, 2000);
}
console.log("line 1");
hello();
console.log("line 3");

// function display(some) {
//   console.log(some);
// }

// function myCalculator(num1, num2, cb) {
//   let sum = num1 + num2;
//   if (cb) cb(sum);
//   return sum;
// }
// const result = myCalculator(100, 200, (result) => {
//   console.log(result);
// });
//console.log(result);
// let result = myCalculator(2, 3);
// display(result);
