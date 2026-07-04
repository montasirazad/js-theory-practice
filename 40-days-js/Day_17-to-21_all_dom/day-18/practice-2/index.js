const pElem = document.createElement("p");
pElem.innerHTML = "Hello DOM <br/> <u>Javascript</u>";
document.body.appendChild(pElem);

const span = document.createElement("span");
span.innerText = "I am a span";
span.style.backgroundColor = "lightgreen";
const copy = span.cloneNode(true);
console.log(copy);

const h1Elem = document.querySelector('h1')
document.body.insertBefore(span,h1Elem)
const p2 = document.querySelector('p')
document.body.insertBefore(copy,p2)
