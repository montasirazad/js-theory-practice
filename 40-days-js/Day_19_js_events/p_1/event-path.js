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

grandParentElem.addEventListener(
  "click",
  function () {
    console.log("Grand parent clicked");
  },
  true,
);

parentElem.addEventListener(
  "click",
  function () {
    console.log("parent clicked");
  },
  true,
);

childElem.addEventListener(
  "click",
  function () {
    console.log("child clicked");
  },
  true,
);

document.getElementById("itemList").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(`You clicked on ${e.target.textContent}`);
  }
});
