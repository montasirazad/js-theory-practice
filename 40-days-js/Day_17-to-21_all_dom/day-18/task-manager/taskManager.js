const inputElem = document.getElementById("taskInput");
const ulElem = document.getElementById("taskList");
const searchElem = document.getElementById("searchInput");

console.log(ulElem);

function addTask() {
  const inputValue = inputElem.value;
  if (inputValue == "") return;
  const liElem = document.createElement("li");
  liElem.innerText = inputValue;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";
  liElem.append(deleteBtn);
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "✅";
  liElem.append(completeBtn);
  ulElem.append(liElem);
  inputElem.value = "";

  deleteBtn.addEventListener("click", function () {
    liElem.remove();
  });

  completeBtn.addEventListener("click", function () {
    liElem.classList.toggle("completeTask");
  });
}

searchElem.addEventListener("keyup", function (e) {
  //   console.log(e.target.value);
  const searchTerm = e.target.value;
  const liElem = ulElem.children;

  [...liElem].forEach((li) => {
    li.style.backgroundColor = li.innerText
      .trim()
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
      ? "orangered"
      : "";
    //console.log(li.innerText.trim().toLowerCase());
  });

  console.log(liElem);
});
