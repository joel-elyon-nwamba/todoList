// Grab DOM from html
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addTaskButton = document.getElementById("addTaskButton");
const deleteButton = document.getElementById("deleteTaskButton");
const li = document.createElement("li");

const addTask = () => {
    const itemInput = taskInput.value;
    if(itemInput) {
        li.textContent = itemInput;
        li.classList.add("item-list");
        taskList.appendChild(li);
    }
    taskInput.value = "";
}

const deleteTask = (li) => {
    taskList.removeChild(li);
}

addTaskButton.addEventListener("click", addTask);
deleteButton.addEventListener("click", deleteTask(li));
