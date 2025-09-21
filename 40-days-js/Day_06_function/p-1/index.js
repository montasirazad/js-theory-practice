//**Function body*/

function printThis() {
  console.log("printing a massage");
}

printThis(); // <---- call or invoke a function

// Function as expression

let printFunc = function () {
  console.log("print function");
};

printFunc();

// Function parameters and arguments
function sum(a, b) {
  return a + b;
}

console.log(sum(2, 4));

// Rest parameters

function calculateThis(x, y, ...rest) {
  // rest parameter must be the last parameter
  console.log(x, y, rest);
}

calculateThis(1, 2, 3, 4, 5, 6, 7, 8, 9);

//** Nested function */

function outer() {
  console.log("outer function scope");

  function inner() {
    console.log("inner function scope");
  }
  inner();
}

outer();

// Callback function

function foo(func) {
  console.log("Foo function");
  func();
}

foo(function () {
  console.log("func function");
});

// Higher order function

function getCamera(camera) {
  camera();
}

getCamera(function () {
  console.log("sony");
});

function returnFunc() {
  return function () {
    console.log("hello");
  };
}

const retFun = returnFunc();
retFun();

// IIFE(Immediately Invoked Function Expression)
(function () {
  console.log("IIFE(Immediately Invoked Function Expression)");
})();

// Recursion
