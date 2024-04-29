let i = 1;
const mainDiv = document.getElementById("main");
const btn = document.getElementById("btn");
const inputTextValue = document.getElementById("inputField");
const ol = document.getElementById("ol");

btn.addEventListener("click", () => {
  let newLi = document.createElement("li");
  newLi.innerHTML = "Learn" + " " + inputTextValue.value;
  ol.appendChild(newLi);

  inputTextValue.value = "";
  console.log(inputTextValue.value);
  console.log("hello");
});
