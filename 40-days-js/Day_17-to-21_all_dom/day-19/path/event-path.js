// Define bubbling
// child -> parent -> grandparent

// bubble

document.getElementById("grandParent").addEventListener("click", () => {
  console.log("grand parent clicked");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("child clicked");
});

document.getElementById("grandParent").addEventListener(
  "click",
  () => {
    console.log("grand parent clicked");
  },
  true,
);

document.getElementById("parent").addEventListener(
  "click",
  () => {
    console.log("parent clicked");
  },
  true,
);

document.getElementById("child").addEventListener(
  "click",
  () => {
    console.log("child clicked");
  },
  true,
);

document.getElementById("item-list").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(`You clicked on ${e.target.textContent}`);
  }
});
