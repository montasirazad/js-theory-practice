function handleClick(greeting) {
  console.log(greeting);
}

const myBtn2 = document.getElementById("btn2");

// myBtn2.onclick = function () {
//     console.log('my button 2 click');
// }

// myBtn2.onclick = function () {
//     console.log('my button 2 clicked again');
// }

const countBtnElem = document.getElementById("countBtn");
let counter = 0;

const handleCount = () => {
  console.log("counter", counter);
  counter++;
};

countBtnElem.addEventListener("click", handleCount);

//countBtnElem.removeEventListener("click", handleCount);

/***
 * DOM content loaded
 */
