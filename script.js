const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popupMessage");

addTaskButton.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="deleteButton">Delete</button>
  `;

  taskList.appendChild(li);
  taskInput.value = "";

  li.querySelector(".deleteButton").addEventListener("click", () => {
    li.remove();
    showPopup("Task deleted Successfully!");
  });

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  showPopup("Task added Successfully!");
}

function showPopup(message) {
  popupMessage.textContent = message;
  popup.style.display = "flex";
  setTimeout(() => {
    popup.style.display = "none";
  }, 1500);
}
