//** creating element */

const pElem = document.createElement("p");
pElem.innerText = "Hello world";
document.body.appendChild(pElem);

//** Insert Element  */

//** Insert before */

const span = document.createElement("span");
span.innerText = "insert before";

const pTag = document.querySelector("p");
document.body.insertBefore(span, pTag);
