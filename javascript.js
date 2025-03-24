function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");
    
    if (taskInput.value.trim() !== "") {
        let li = document.createElement("li");
        let taskText = document.createElement("span");
        taskText.textContent = taskInput.value;
        
        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.style.background = "#f39c12";
        editBtn.style.border = "none";
        editBtn.style.padding = "5px 10px";
        editBtn.style.color = "white";
        editBtn.style.cursor = "pointer";
        editBtn.style.borderRadius = "3px";
        editBtn.onclick = function() {
            let newTask = prompt("Edit your task:", taskText.textContent);
            if (newTask !== null && newTask.trim() !== "") {
                taskText.textContent = newTask;
            }
        };
        
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.style.background = "#e74c3c";
        deleteBtn.style.border = "none";
        deleteBtn.style.padding = "5px 10px";
        deleteBtn.style.color = "white";
        deleteBtn.style.cursor = "pointer";
        deleteBtn.style.borderRadius = "3px";
        deleteBtn.onclick = function() {
            taskList.removeChild(li);
        };
        
        li.appendChild(taskText);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = "";
    }
}
