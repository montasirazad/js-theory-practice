/**fruits => Array with fruits name
 *fruitsDetail =>  => Array with fruits details
  users =>  => Array with random users */

import { fruits } from "../utils/arrData.js";

const myDiv = document.querySelector("#my-div");
const olElem = document.createElement("ol");
myDiv.append(olElem);
fruits.map((fruit) => {
  const liElem = document.createElement("li");
  liElem.innerHTML = fruit;
  olElem.append(liElem);
});
