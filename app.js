window.onload = () => {
    const form1 = document.querySelector("#addForm");
    const todoBoard = document.getElementById("todo-board");
    const inProgressBoard = document.getElementById("inprogress-board");
    const completedBoard = document.getElementById("completed-board");
    let tasks = [];
    form1.addEventListener("submit", addItem);
    function addItem(e) {
        e.preventDefault();
        const taskName = document.getElementById("item").value;
        const dueDate = document.getElementById("dueDate").value;
        const description = document.getElementById("description").value;
        if (taskName.trim() === "" || dueDate.trim() === "") {
            alert("Please enter task name and due date.");
            return;
        }
        const task = {
            id: Date.now().toString(),
            name: taskName,
            dueDate: dueDate,
            description: description.substring(0, 2000), // Limit description to 2000 characters
            status: "todo" // Default status is "To Do"
        };

        tasks.push(task);
        saveTasksToLocalStorage();
        renderTasks();
        form1.reset();
    }
    function renderTasks() {
        todoBoard.innerHTML = "";
        inProgressBoard.innerHTML = "";
        completedBoard.innerHTML = "";

        tasks.forEach(task => {
            const taskCard = document.createElement("div");
            taskCard.classList.add("card", "mb-3");

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            const taskName = document.createElement("h5");
            taskName.classList.add("card-title");
            taskName.textContent = task.name;

            const dueDate = document.createElement("p");
            dueDate.classList.add("card-text");
            dueDate.textContent = `Due Date: ${task.dueDate}`;

            const description = document.createElement("p");
            description.classList.add("card-description");
            description.textContent = task.description;

            const moveButton = document.createElement("button");
            moveButton.classList.add("btn", "btn-info", "float-right", "ml-2");
            moveButton.textContent = "Move";
            moveButton.addEventListener("click", () => {
                moveTask(task.id);
            });
            const editButton = document.createElement("button");
            editButton.classList.add("btn", "btn-primary", "float-right", "ml-2");
            editButton.textContent = "Edit";
            editButton.addEventListener("click", () => {
                editTask(task.id);
            });
            const deleteButton = document.createElement("button");
            deleteButton.classList.add("btn", "btn-danger", "float-right", "ml-2");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => {
                deleteTask(task.id);
            });
            cardBody.appendChild(taskName);
            cardBody.appendChild(dueDate);
            cardBody.appendChild(description); // Add description to card body
            cardBody.appendChild(moveButton);
            cardBody.appendChild(editButton);
            cardBody.appendChild(deleteButton);
            taskCard.appendChild(cardBody);
            if (task.status === "todo") {
                todoBoard.appendChild(taskCard);
            } else if (task.status === "inprogress") {
                inProgressBoard.appendChild(taskCard);
            } else if (task.status === "completed") {
                completedBoard.appendChild(taskCard);
            }
        });
    }
    function moveTask(id) {
        const index = tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            const task = tasks[index];
            if (task.status === "todo") {
                task.status = "inprogress";
            } else if (task.status === "inprogress") {
                task.status = "completed";
            }
            saveTasksToLocalStorage();
            renderTasks();
        }
    }

    function editTask(id) {
        const index = tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            const task = tasks[index];
            const newName = prompt("Enter new name for the task:", task.name);
            if (newName !== null) {
                task.name = newName;
                saveTasksToLocalStorage();
                renderTasks();
            }
        }
    }

    function deleteTask(id) {
        const confirmation = confirm("Are you sure you want to delete this task?");
        if (confirmation) {
            tasks = tasks.filter(task => task.id !== id);
            saveTasksToLocalStorage();
            renderTasks();
        }
    }
    function saveTasksToLocalStorage() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    function loadTasksFromLocalStorage() {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
            tasks = JSON.parse(storedTasks);
            renderTasks();
        }
    }
    loadTasksFromLocalStorage();
};
