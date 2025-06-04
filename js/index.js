// DOM elementts to integrate 
const inputTask = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Function to add a task
const addTask = () => {
const itemAdd = inputTask.value;
    if(itemAdd) {
        const listItems = document.createElement("li");
        listItems.classList.add("list-items");
        listItems.textContent = itemAdd;
        taskList.appendChild(listItems);
    }
    inputTask.value = "";
}

addTask();

// Event listener for the add task button
addTaskButton.addEventListener("click", addTask);