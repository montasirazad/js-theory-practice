/**
Types of error

1. Parsing error
2. Runtime error
 
*/

//console.log(x);

// let obj = null
// console.log(obj.null);
// console.log('hi'

//let arr = new Array(-1)

// try...catch

try {
  console.log("execution start here");
  abd;
  console.log("execution end here");
} catch (error) {
  console.error("Error occurred here", error);
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}

function divideNumber(a, b) {
  try {
    if (b === 0) {
      const err = new Error("Division by zero is not allowed");
      throw err;
    }
    const result = a / b;
    console.log(result);
  } catch (error) {
    console.error("got a math error", error.message);
  }
}

divideNumber(4, 4);
divideNumber(4, 0);

const person ={
    name:'A',
    address:{
        city:'Ny'
    }
}

function getPostalCode(user){
    try {
        console.log(user.address.country.city);
    } catch (error) {
        console.log("Error accessing property",error.message);
    }
}

getPostalCode(person)