let titleElem = document.getElementById("h_1");
//console.log(titleElem);

let pElem = document.getElementsByClassName("p_tag");

[...pElem].forEach((elem) => {
  //console.log(elem);
});
//** selecting by tag name */
//console.log(document.getElementsByTagName("p"));

//selector -query selector
let para = document.querySelector("p.info");
//console.log(para);

let paras = document.querySelectorAll("p.p_tag");
//console.log(paras);

function highLightText() {
  console.log("highlight text");
  const allElem = document.querySelectorAll("p.p_tag");
  allElem.forEach((elem) => {
    elem.style.backgroundColor = "yellow";
  });
}

function filterList() {
  const searchInput = document.getElementById("search");
  const searchTerm = searchInput.value;
  const listItem = document.querySelectorAll("ul#itemList li");
 [...listItem].forEach((elem) => {
    elem.style.display = elem.innerText
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
      ? "block"
      : "none";
     
  });
}
