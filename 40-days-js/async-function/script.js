const paymentSuccess = true;
const marks = 70;
function enroll(callback) {
  console.log("course enrollment is in progress.");
  setTimeout(function () {
    if (paymentSuccess) {
      callback();
    } else {
      console.log("payment failed.");
    }
  }, 2000);
}

function progress(callback) {
  console.log("course on progress");
  setTimeout(function () {
    if (marks >= 80) {
      callback();
    } else {
      console.log("You could not get enough marks.");
    }
  }, 3000);
}

function getcertificate() {
  console.log("preparing your certificate.");
  setTimeout(function () {
    console.log("you got the certificate.");
  }, 1000);
}

enroll(progress)

getcertificate()

// function hello() {
//   setTimeout(() => {
//     console.log("line 2");
//   }, 2000);
// }
// console.log("line 1");
// hello();
// console.log("line 3");

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
