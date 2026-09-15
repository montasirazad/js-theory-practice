var x = 23;

const myFunction = () => {
  var a = 10;
  console.log("from myFunction value of a", a);
  console.log("from myFunction value of x", x);
};
// myFunction()
// console.log('value of a: ',a);

let b = 10;
function test() {
  console.log("from function", b);
}
test();
console.log("from outside", b);
