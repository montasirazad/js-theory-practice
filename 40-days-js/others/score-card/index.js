const pElem = document.createElement("p");
const btn = document.createElement("button");

pElem.innerText = "Hello world";
btn.innerText = "click";

// document.body.appendChild(pElem);
// document.body.appendChild(btn);
let num = 0;

const divElem = document.createElement("div");
document.body.appendChild(divElem);


function createMarkUp() {
  const childDiv = document.createElement("div");
  const h1Elem = document.createElement("h1");
  const btnElem = document.createElement("button");
  h1Elem.innerText = `This is no ${(num += 1)}`;
  btnElem.innerText = "Delete";
  childDiv.append(h1Elem);
  childDiv.append(btnElem);
  divElem.appendChild(childDiv);
  console.log(num);
  btnElem.addEventListener("click", () => {
    childDiv.remove();
  });
}
