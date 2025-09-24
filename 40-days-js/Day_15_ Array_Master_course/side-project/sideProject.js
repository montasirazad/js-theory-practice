/**
 * numbers => array o numbers 1-20
 * fruits => Array with fruits name
 *fruitsDetail =>  => Array with fruits details
  users =>  => Array with random users */

import { fruits, numbers } from "../utils/arrData.js";

const myDiv = document.querySelector("#my-div");
const olElem = document.createElement("ol");
myDiv.append(olElem);
fruits.map((fruit) => {
  const liElem = document.createElement("li");
  liElem.innerHTML = fruit;
  olElem.append(liElem);
});

console.log("Main =>", numbers);

// console.log(numbers.slice(5, 10));
// console.log("sliced =>", numbers);

console.log(fruits.indexOf('Apple'));
