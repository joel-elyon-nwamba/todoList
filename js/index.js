// Grab DOM from html
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addTaskButton = document.getElementById("addTaskButton");


const addTask = () => {
    const itemInput = taskInput.value;
    const li = document.createElement("li");
    if(itemInput) {
        li.textContent = itemInput;
        li.classList.add("item-list");

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.addEventListener("click", () => {
            li.remove();
        })
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }

    taskInput.value = "";
  
}


addTaskButton.addEventListener("click", addTask);
