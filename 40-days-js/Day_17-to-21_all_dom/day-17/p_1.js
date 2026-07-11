const paragraphs = document.querySelectorAll("p.para");
function highlightText() {}

function addTask() {
  const txtInput = document.getElementById("task-input");
  const task = txtInput.value;
  if (task.trim() === "") return;
  console.log(task);
}
