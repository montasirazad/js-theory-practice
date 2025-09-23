const inputElem = document.getElementById("taskInput");
const ulElem = document.getElementById("taskList");

function addTask() {
  const inputValue = inputElem.value;
  if (inputValue == "") return;
  const liElem = document.createElement("li");
  liElem.innerText = inputValue;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  //deleteBtn.innerText = "❌";
  liElem.append(deleteBtn);
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "Complete";
  //completeBtn.innerText = "✅";
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
  const searchElem = document.getElementById("searchInput");
  const searchTerm = searchElem.value;
  const liElem = document.querySelectorAll("ul#taskList li");
  //console.log(liElem);
  liElem.forEach((list) => {
    list.style.display = list.innerText
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
      ? "block"
      : "none";
  });
}
