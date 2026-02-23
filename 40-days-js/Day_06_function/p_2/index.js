console.log();

const printMe = function () {
  console.log("print me");
  console.log("printed");
};

function printThis(param1, param2) {
  console.log("Printing ... ", param1, param2);
}

// printThis("Js", "lesson");
// printThis("Js", 100);
// printThis("Js", true);
// printThis("Js", NaN);

const res = function sum(a, b) {
  const ret = a + b;

  return ret;
};

function collectThis(x, y, ...z) {
  console.log(x);
  console.log(y);
  console.log(z);
}

collectThis(1, 2, 3, 4, 5, 6);

// arrow function this keyword

function x() {
  console.log("x", this);
}

x();

const y = () => {
  console.log(this);
};
y();

const obj = {
  item: 2,
};

obj.fun = () => {
  console.log(this);
};

obj.fun()