const btn = document.getElementById("btn");
const item = document.getElementsByClassName("main");

btn.addEventListener("click", () => {
  item.classList.toggle("test");
});
