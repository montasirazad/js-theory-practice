const inputElem = document.getElementById("taskInput");
const ulElem = document.getElementById("taskList");
const searchElem = document.getElementById("searchInput");

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

function searchText() {
  const searchTerm = searchElem.value;
  console.log(searchElem.value);
  const liElem = document.querySelectorAll("ul#taskList li");
  console.log(liElem);
  liElem.forEach((li) => {
    li.style.backgroundColor = li.textContent
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
      ? "yelloW"
      : "";
    //console.log(li.innerText.trim().toLowerCase());
  });

  console.log(liElem);
}
