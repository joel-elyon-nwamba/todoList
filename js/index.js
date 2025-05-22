// DOM elementts to integrate 
const inputTask = document.getElementById("inputTask");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Function to add a task
const addTask = () => {
    const taskText = inputTask.value.trim();
    if (taskText) {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
        inputTask.value = ""; // Clear the input field
    } else {
        alert("Please enter a task.");
    }
}

addTask();

// Event listener for the add task button
addTaskButton.addEventListener("click", addTask);