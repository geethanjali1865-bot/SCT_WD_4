function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskDateTime = document.getElementById("taskDateTime");

    let taskText = taskInput.value.trim();
    let dateTime = taskDateTime.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <strong>${taskText}</strong><br>
        <small>${dateTime}</small>

        <div class="task-buttons">
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
    taskDateTime.value = "";
}

function completeTask(button) {
    button.parentElement.parentElement.classList.toggle("completed");
}

function editTask(button) {
    let li = button.parentElement.parentElement;
    let task = li.querySelector("strong");

    let updatedTask = prompt("Edit Task:", task.innerText);

    if (updatedTask !== null && updatedTask.trim() !== "") {
        task.innerText = updatedTask;
    }
}

function deleteTask(button) {
    button.parentElement.parentElement.remove();
}