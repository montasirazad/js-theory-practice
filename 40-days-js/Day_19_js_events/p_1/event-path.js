const grandParentElem = document.getElementById("grand-parent");
const parentElem = document.getElementById("parent");
const childElem = document.getElementById("child");

// Event bubble
grandParentElem.addEventListener("click", function () {
  console.log("Grand parent clicked");
});

parentElem.addEventListener("click", function () {
  console.log("parent clicked");
});

childElem.addEventListener("click", function () {
  console.log("child clicked");
});

// Capturing

