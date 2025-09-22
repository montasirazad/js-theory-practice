//** creating element */

const pElem = document.createElement("p");
pElem.innerText = "Hello world";
document.body.appendChild(pElem);

//** Insert Element  */

//** Insert before */

const h1Span = document.createElement("span");
h1Span.innerText = "before h1 element";
const h1Elem = document.querySelector("h1");
document.body.insertBefore(h1Span, h1Elem);

const span = document.createElement("span");
span.innerText = "insert element before <P> tag";

const pTag = document.querySelector("p");
document.body.insertBefore(span, pTag);

// Next sibling element

{
}


// Modifying content


