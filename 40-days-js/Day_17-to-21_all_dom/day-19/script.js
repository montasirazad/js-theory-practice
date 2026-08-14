function handleClick() {
  console.log(201);
}

const myBtn_2 = document.getElementById("mybtn2");

myBtn_2.onclick = function () {
  console.log("clicked my button 2");
};

const searchElem = document.getElementById("search-id");
function handleChange(e) {
  console.log(e.currentTarget);
  console.log("type :", e.type);
  console.log("name :", e.target.name);
  console.log("value :", e.target.value);
  console.log("type :", e.target.type);
  console.log(this);
}
searchElem.addEventListener("change", handleChange);

// event capture, bubble , delegation
