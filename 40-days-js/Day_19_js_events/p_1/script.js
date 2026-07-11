function handleClick(greeting) {
  console.log(greeting);
}

const myBtn2 = document.getElementById("btn2");

myBtn2.onclick = function () {
  console.log("my button 2 clicked");
};

const countBtnElem = document.getElementById("countBtn");
let counter = 0;
countBtnElem.addEventListener("click", function () {
  console.log("counter: ", counter);
  counter++;
});

const inputElem = document.getElementById("inpElem");
function handleChange(e) {
  console.log(e);
  console.log("Event type: ", e.type);
  console.log("Event name: ", e.target.name);
  console.log("Event value: ", e.target.value);
}
inputElem.addEventListener("change", handleChange);

/***
 * DOM content loaded
 */

// const countBtnElem = document.getElementById("countBtn");
// let counter = 0;

// const handleCount = () => {
//   console.log("counter", counter);
//   counter++;
// };

// countBtnElem.addEventListener("click", handleCount);

//countBtnElem.removeEventListener("click", handleCount);
