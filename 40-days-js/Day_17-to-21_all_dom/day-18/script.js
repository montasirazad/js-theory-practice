//** creating element */
const pElem = document.createElement("p");
pElem.innerText = "This a text added dynamically";
document.body.appendChild(pElem);
//** Insert Element start*/
const spanElem = document.createElement("span");
spanElem.innerText = "I am a span element";
const pElem2 = document.querySelector("p");
document.body.insertBefore(spanElem, pElem2);
//** Insert before end*/

// Next sibling element

{
}

// Modifying content
