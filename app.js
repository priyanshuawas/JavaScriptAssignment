// // app.js (continued)

// window.onload = () => {
//     const form1 = document.querySelector("#addForm");
//     const kanbanBoard = document.getElementById("kanban-board");
//     const clearCompletedBtn = document.getElementById("clearCompletedBtn");
//     const sortSelect = document.getElementById("sortSelect");
//     const searchInput = document.getElementById("searchInput");

//     let tasks = [];

//     form1.addEventListener("submit", addItem);
//     clearCompletedBtn.addEventListener("click", clearCompletedTasks);
//     sortSelect.addEventListener("change", sortTasks);
//     searchInput.addEventListener("input", searchTasks);

//     function addItem(e) {
//         e.preventDefault();

//         const taskName = document.getElementById("item").value;
//         const dueDate = document.getElementById("dueDate").value;

//         if (taskName.trim() === "" || dueDate.trim() === "") {
//             alert("Please enter task name and due date.");
//             return;
//         }

//         const task = {
//             id: Date.now().toString(),
//             name: taskName,
//             dueDate: dueDate,
//             completed: false
//         };

//         tasks.push(task);
//         saveTasksToLocalStorage();
//         renderTasks();
//         form1.reset();
//     }

//     function renderTasks() {
//         kanbanBoard.innerHTML = ""; // Clear existing tasks

//         tasks.forEach(task => {
//             const taskCard = document.createElement("div");
//             taskCard.classList.add("card", "mb-3");

//             const cardBody = document.createElement("div");
//             cardBody.classList.add("card-body");

//             const taskName = document.createElement("h5");
//             taskName.classList.add("card-title");
//             taskName.textContent = task.name;

//             const dueDate = document.createElement("p");
//             dueDate.classList.add("card-text");
//             dueDate.textContent = `Due Date: ${task.dueDate}`;

//             const completeCheckbox = document.createElement("input");
//             completeCheckbox.setAttribute("type", "checkbox");
//             completeCheckbox.checked = task.completed;
//             completeCheckbox.addEventListener("change", () => {
//                 task.completed = completeCheckbox.checked;
//                 saveTasksToLocalStorage();
//             });


//             const editButton = document.createElement("button");
//             editButton.classList.add("btn", "btn-primary", "float-right", "ml-2");
//             editButton.textContent = "Edit";
//             editButton.addEventListener("click", () => {
//                 editTask(task.id);
//             });

//             const deleteButton = document.createElement("button");
//             deleteButton.classList.add("btn", "btn-danger", "float-right", "ml-2");
//             deleteButton.textContent = "Delete";
//             deleteButton.addEventListener("click", () => {
//                 deleteTask(task.id);
//             });

//             cardBody.appendChild(taskName);
//             cardBody.appendChild(dueDate);
//             cardBody.appendChild(completeCheckbox);
//             cardBody.appendChild(document.createTextNode(" Mark as Completed"));
//             cardBody.appendChild(editButton);
//             cardBody.appendChild(deleteButton);
//             taskCard.appendChild(cardBody);

//             kanbanBoard.appendChild(taskCard);
//         });
//     }
//     function editTask(taskId) {
//         const taskToEdit = tasks.find(task => task.id === taskId);
//         const newName = prompt("Enter new name for the task:", taskToEdit.name);
//         if (newName !== null) {
//             taskToEdit.name = newName;
//             saveTasksToLocalStorage();
//             renderTasks();
//         }
//     }
//     function deleteTask(taskId) {
//         tasks = tasks.filter(task => task.id !== taskId);
//         saveTasksToLocalStorage();
//         renderTasks();
//     }
//     function clearCompletedTasks() {
//         tasks = tasks.filter(task => !task.completed);
//         saveTasksToLocalStorage();
//         renderTasks();
//     }
//     function sortTasks() {
//         const sortBy = sortSelect.value;
//         if (sortBy === "dueDate") {
//             tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
//         } else if (sortBy === "completed") {
//             tasks.sort((a, b) => a.completed - b.completed);
//         }
//         renderTasks();
//     }
//     function searchTasks() {
//         const searchTerm = searchInput.value.toLowerCase();
//         const filteredTasks = tasks.filter(task => task.name.toLowerCase().includes(searchTerm));
//         renderFilteredTasks(filteredTasks);
//     }
//     function renderFilteredTasks(filteredTasks) {
//         kanbanBoard.innerHTML = ""; // Clear existing tasks

//         filteredTasks.forEach(task => {
//             const taskCard = document.createElement("div");
//             taskCard.classList.add("card", "mb-3");

//             // Rendering task card content (similar to renderTasks)

//             kanbanBoard.appendChild(taskCard);
//         });
//     }

//     function saveTasksToLocalStorage() {
//         localStorage.setItem("tasks", JSON.stringify(tasks));
//     }

//     function loadTasksFromLocalStorage() {
//         const tasksString = localStorage.getItem("tasks");
//         if (tasksString) {
//             tasks = JSON.parse(tasksString);
//             renderTasks();
//         }
//     }

//     loadTasksFromLocalStorage();
// };
// app.js

// window.onload = () => {
//     const form1 = document.querySelector("#addForm");
//     const kanbanBoard = document.getElementById("kanban-board");
//     const clearCompletedBtn = document.getElementById("clearCompletedBtn");
//     const sortSelect = document.getElementById("sortSelect");
//     const searchInput = document.getElementById("searchInput");

//     let tasks = [];

//     form1.addEventListener("submit", addItem);
//     clearCompletedBtn.addEventListener("click", clearCompletedTasks);
//     sortSelect.addEventListener("change", sortTasks);
//     searchInput.addEventListener("input", searchTasks);

//     function addItem(e) {
//         e.preventDefault();

//         const taskName = document.getElementById("item").value;
//         const dueDate = document.getElementById("dueDate").value;

//         if (taskName.trim() === "" || dueDate.trim() === "") {
//             alert("Please enter task name and due date.");
//             return;
//         }

//         const task = {
//             id: Date.now().toString(),
//             name: taskName,
//             dueDate: dueDate,
//             status: "todo" // Default status is "To Do"
//         };

//         tasks.push(task);
//         saveTasksToLocalStorage();
//         renderTasks();
//         form1.reset();
//     }

//     function renderTasks() {
//         kanbanBoard.innerHTML = ""; // Clear existing tasks

//         tasks.forEach(task => {
//             const taskCard = document.createElement("div");
//             taskCard.classList.add("card", "mb-3");

//             const cardBody = document.createElement("div");
//             cardBody.classList.add("card-body");

//             const taskName = document.createElement("h5");
//             taskName.classList.add("card-title");
//             taskName.textContent = task.name;

//             const dueDate = document.createElement("p");
//             dueDate.classList.add("card-text");
//             dueDate.textContent = `Due Date: ${task.dueDate}`;

//             const completeCheckbox = document.createElement("input");
//             completeCheckbox.setAttribute("type", "checkbox");
//             completeCheckbox.checked = task.status === "completed";
//             completeCheckbox.addEventListener("change", () => {
//                 task.status = completeCheckbox.checked ? "completed" : "todo";
//                 saveTasksToLocalStorage();
//                 renderTasks();
//             });

//             const moveButton = document.createElement("button");
//             moveButton.classList.add("btn", "btn-info", "float-right", "ml-2");
//             moveButton.textContent = "Move to In Progress";
//             if (task.status === "inprogress") {
//                 moveButton.textContent = "Move to Completed";
//             }
//             moveButton.addEventListener("click", () => {
//                 moveTask(task.id);
//             });

//             const deleteButton = document.createElement("button");
//             deleteButton.classList.add("btn", "btn-danger", "float-right", "ml-2");
//             deleteButton.textContent = "Delete";
//             deleteButton.addEventListener("click", () => {
//                 deleteTask(task.id);
//             });

//             cardBody.appendChild(taskName);
//             cardBody.appendChild(dueDate);
//             cardBody.appendChild(completeCheckbox);
//             cardBody.appendChild(document.createTextNode(" Mark as Completed"));
//             cardBody.appendChild(moveButton);
//             cardBody.appendChild(deleteButton);
//             taskCard.appendChild(cardBody);

//             kanbanBoard.appendChild(taskCard);
//         });
//     }

//     function moveTask(taskId) {
//         const taskIndex = tasks.findIndex(task => task.id === taskId);
//         const currentStatus = tasks[taskIndex].status;

//         if (currentStatus === "todo") {
//             tasks[taskIndex].status = "inprogress";
//         } else if (currentStatus === "inprogress") {
//             tasks[taskIndex].status = "completed";
//         }

//         saveTasksToLocalStorage();
//         renderTasks();
//     }

//     function deleteTask(taskId) {
//         tasks = tasks.filter(task => task.id !== taskId);
//         saveTasksToLocalStorage();
//         renderTasks();
//     }

//     function clearCompletedTasks() {
//         tasks = tasks.filter(task => task.status !== "completed");
//         saveTasksToLocalStorage();
//         renderTasks();
//     }

//     function sortTasks() {
//         const sortBy = sortSelect.value;
//         if (sortBy === "dueDate") {
//             tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
//         } else if (sortBy === "status") {
//             tasks.sort((a, b) => {
//                 if (a.status < b.status) return -1;
//                 if (a.status > b.status) return 1;
//                 return 0;
//             });
//         }
//         renderTasks();
//     }
//     function searchTasks() {
//         const searchTerm = searchInput.value.toLowerCase();
//         const filteredTasks = tasks.filter(task => task.name.toLowerCase().includes(searchTerm));
//         renderFilteredTasks(filteredTasks);
//     }
//     function renderFilteredTasks(filteredTasks) {
//         kanbanBoard.innerHTML = ""; // Clear existing tasks

//         filteredTasks.forEach(task => {
//             const taskCard = document.createElement("div");
//             taskCard.classList.add("card", "mb-3");

//             // Rendering task card content (similar to renderTasks)

//             kanbanBoard.appendChild(taskCard);
//         });
//     }
//     function saveTasksToLocalStorage() {
//         localStorage.setItem("tasks", JSON.stringify(tasks));
//     }
//     function loadTasksFromLocalStorage() {
//         const tasksString = localStorage.getItem("tasks");
//         if (tasksString) {
//             tasks = JSON.parse(tasksString);
//             renderTasks();
//         }
//     }

//     loadTasksFromLocalStorage();
// };
// window.onload = () => {
//     const form1 = document.querySelector("#addForm");
//     const kanbanBoard = document.getElementById("kanban-board");
//     const clearCompletedBtn = document.getElementById("clearCompletedBtn");
//     const sortSelect = document.getElementById("sortSelect");
//     const searchInput = document.getElementById("searchInput");

//     let tasks = [];

//     form1.addEventListener("submit", addItem);
//     clearCompletedBtn.addEventListener("click", clearCompletedTasks);
//     sortSelect.addEventListener("change", sortTasks);
//     searchInput.addEventListener("input", searchTasks);

//     function addItem(e) {
//         e.preventDefault();

//         const taskName = document.getElementById("item").value;
//         const dueDate = document.getElementById("dueDate").value;

//         if (taskName.trim() === "" || dueDate.trim() === "") {
//             alert("Please enter task name and due date.");
//             return;
//         }

//         const task = {
//             id: Date.now().toString(),
//             name: taskName,
//             dueDate: dueDate,
//             status: "todo" // Default status is "To Do"
//         };

//         tasks.push(task);
//         saveTasksToLocalStorage();
//         renderTasks();
//         form1.reset();
//     }

//     function renderTasks() {
//         kanbanBoard.innerHTML = ""; // Clear existing tasks

//         tasks.forEach(task => {
//             const taskCard = document.createElement("div");
//             taskCard.classList.add("card", "mb-3");

//             const cardBody = document.createElement("div");
//             cardBody.classList.add("card-body");

//             const taskName = document.createElement("h5");
//             taskName.classList.add("card-title");
//             taskName.textContent = task.name;

//             const dueDate = document.createElement("p");
//             dueDate.classList.add("card-text");
//             dueDate.textContent = `Due Date: ${task.dueDate}`;

//             const completeCheckbox = document.createElement("input");
//             completeCheckbox.setAttribute("type", "checkbox");
//             completeCheckbox.checked = task.status === "completed";
//             completeCheckbox.addEventListener("change", () => {
//                 task.status = completeCheckbox.checked ? "completed" : "todo";
//                 saveTasksToLocalStorage();
//                 renderTasks();
//             });

//             const moveButton = document.createElement("button");
//             moveButton.classList.add("btn", "btn-info", "float-right", "ml-2");
//             moveButton.textContent = "Move to In Progress";
//             if (task.status === "inprogress") {
//                 moveButton.textContent = "Move to Completed";
//             }
//             moveButton.addEventListener("click", () => {
//                 moveTask(task.id);
//             });

//             const editButton = document.createElement("button");
//             editButton.classList.add("btn", "btn-primary", "float-right", "ml-2");
//             editButton.textContent = "Edit";
//             editButton.addEventListener("click", () => {
//                 editTask(task.id);
//             });

//             const deleteButton = document.createElement("button");
//             deleteButton.classList.add("btn", "btn-danger", "float-right", "ml-2");
//             deleteButton.textContent = "Delete";
//             deleteButton.addEventListener("click", () => {
//                 deleteTask(task.id);
//             });

//             cardBody.appendChild(taskName);
//             cardBody.appendChild(dueDate);
//             cardBody.appendChild(completeCheckbox);
//             cardBody.appendChild(document.createTextNode(" Mark as Completed"));
//             cardBody.appendChild(moveButton);
//             cardBody.appendChild(editButton);
//             cardBody.appendChild(deleteButton);
//             taskCard.appendChild(cardBody);

//             kanbanBoard.appendChild(taskCard);
//         });
//     }

//     function editTask(taskId) {
//         const taskToEdit = tasks.find(task => task.id === taskId);
//         const newName = prompt("Enter new name for the task:", taskToEdit.name);
//         if (newName !== null) {
//             taskToEdit.name = newName;
//             saveTasksToLocalStorage();
//             renderTasks();
//         }
//     }

//     function moveTask(taskId) {
//         const taskIndex = tasks.findIndex(task => task.id === taskId);
//         const currentStatus = tasks[taskIndex].status;

//         if (currentStatus === "todo") {
//             tasks[taskIndex].status = "inprogress";
//         } else if (currentStatus === "inprogress") {
//             tasks[taskIndex].status = "completed";
//         }

//         saveTasksToLocalStorage();
//         renderTasks();
//     }

//     function deleteTask(taskId) {
//         tasks = tasks.filter(task => task.id !== taskId);
//         saveTasksToLocalStorage();
//         renderTasks();
//     }

//     function clearCompletedTasks() {
//         tasks = tasks.filter(task => task.status !== "completed");
//         saveTasksToLocalStorage();
//         renderTasks();
//     }

//     function sortTasks() {
//         const sortBy = sortSelect.value;
//         if (sortBy === "dueDate") {
//             tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
//         } else if (sortBy === "status") {
//             tasks.sort((a, b) => {
//                 if (a.status < b.status) return -1;
//                 if (a.status > b.status) return 1;
//                 return 0;
//             });
//         }
//         renderTasks();
//     }

//     function searchTasks() {
//         const searchTerm = searchInput.value.toLowerCase();
//         const filteredTasks = tasks.filter(task => task.name.toLowerCase().includes(searchTerm));
//         renderFilteredTasks(filteredTasks);
//     }

//     function renderFilteredTasks(filteredTasks) {
//         kanbanBoard.innerHTML = ""; // Clear existing tasks

//         filteredTasks.forEach(task => {
//             const taskCard = document.createElement("div");
//             taskCard.classList.add("card", "mb-3");

//             // Rendering task card content (similar to renderTasks)

//             kanbanBoard.appendChild(taskCard);
//         });
//     }

//     function saveTasksToLocalStorage() {
//         localStorage.setItem("tasks", JSON.stringify(tasks));
//     }

//     function loadTasksFromLocalStorage() {
//         const tasksString = localStorage.getItem("tasks");
//         if (tasksString) {
//             tasks = JSON.parse(tasksString);
//             renderTasks();
//         }
//     }

//     loadTasksFromLocalStorage();
// };
// app.js

// window.onload = () => {
//     const form1 = document.querySelector("#addForm");
//     const todoBoard = document.getElementById("todo-board");
//     const inProgressBoard = document.getElementById("inprogress-board");
//     const completedBoard = document.getElementById("completed-board");

//     let tasks = [];

//     form1.addEventListener("submit", addItem);

//     function addItem(e) {
//         e.preventDefault();

//         const taskName = document.getElementById("item").value;
//         const dueDate = document.getElementById("dueDate").value;

//         if (taskName.trim() === "" || dueDate.trim() === "") {
//             alert("Please enter task name and due date.");
//             return;
//         }

//         const task = {
//             id: Date.now().toString(),
//             name: taskName,
//             dueDate: dueDate,
//             status: "todo" // Default status is "To Do"
//         };

//         tasks.push(task);
//         saveTasksToLocalStorage();
//         renderTasks();
//         form1.reset();
//     }

//     function renderTasks() {
//         todoBoard.innerHTML = "";
//         inProgressBoard.innerHTML = "";
//         completedBoard.innerHTML = "";

//         tasks.forEach(task => {
//             const taskCard = document.createElement("div");
//             taskCard.classList.add("card", "mb-3");

//             const cardBody = document.createElement("div");
//             cardBody.classList.add("card-body");

//             const taskName = document.createElement("h5");
//             taskName.classList.add("card-title");
//             taskName.textContent = task.name;

//             const dueDate = document.createElement("p");
//             dueDate.classList.add("card-text");
//             dueDate.textContent = `Due Date: ${task.dueDate}`;

//             const moveButton = document.createElement("button");
//             moveButton.classList.add("btn", "btn-info", "float-right", "ml-2");
//             moveButton.textContent = "Move";
//             moveButton.addEventListener("click", () => {
//                 moveTask(task.id);
//             });

//             const deleteButton = document.createElement("button");
//             deleteButton.classList.add("btn", "btn-danger", "float-right", "ml-2");
//             deleteButton.textContent = "Delete";
//             deleteButton.addEventListener("click", () => {
//                 deleteTask(task.id);
//             });

//             cardBody.appendChild(taskName);
//             cardBody.appendChild(dueDate);
//             cardBody.appendChild(moveButton);
//             cardBody.appendChild(deleteButton);
//             taskCard.appendChild(cardBody);

//             if (task.status === "todo") {
//                 todoBoard.appendChild(taskCard);
//             } else if (task.status === "inprogress") {
//                 inProgressBoard.appendChild(taskCard);
//             } else if (task.status === "completed") {
//                 completedBoard.appendChild(taskCard);
//             }
//         });
//     }

//     function moveTask(taskId) {
//         const taskIndex = tasks.findIndex(task => task.id === taskId);
//         const currentStatus = tasks[taskIndex].status;

//         if (currentStatus === "todo") {
//             tasks[taskIndex].status = "inprogress";
//         } else if (currentStatus === "inprogress") {
//             tasks[taskIndex].status = "completed";
//         } else if (currentStatus === "completed") {
//             tasks[taskIndex].status = "todo";
//         }

//         saveTasksToLocalStorage();
//         renderTasks();
//     }

//     function deleteTask(taskId) {
//         tasks = tasks.filter(task => task.id !== taskId);
//         saveTasksToLocalStorage();
//         renderTasks();
//     }

//     function saveTasksToLocalStorage() {
//         localStorage.setItem("tasks", JSON.stringify(tasks));
//     }

//     function loadTasksFromLocalStorage() {
//         const tasksString = localStorage.getItem("tasks");
//         if (tasksString) {
//             tasks = JSON.parse(tasksString);
//             renderTasks();
//         }
//     }

//     loadTasksFromLocalStorage();
// };
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

        if (taskName.trim() === "" || dueDate.trim() === "") {
            alert("Please enter task name and due date.");
            return;
        }

        const task = {
            id: Date.now().toString(),
            name: taskName,
            dueDate: dueDate,
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
    function moveTask(taskId) {
        const taskIndex = tasks.findIndex(task => task.id === taskId);
        const currentStatus = tasks[taskIndex].status;

        if (currentStatus === "todo") {
            tasks[taskIndex].status = "inprogress";
        } else if (currentStatus === "inprogress") {
            tasks[taskIndex].status = "completed";
        } else if (currentStatus === "completed") {
            tasks[taskIndex].status = "todo";
        }

        saveTasksToLocalStorage();
        renderTasks();
    }
    function editTask(taskId) {
        const taskToEdit = tasks.find(task => task.id === taskId);
        const newName = prompt("Enter new name for the task:", taskToEdit.name);
        if (newName !== null) {
            taskToEdit.name = newName;
            saveTasksToLocalStorage();
            renderTasks();
        }
    }

    function deleteTask(taskId) {
        tasks = tasks.filter(task => task.id !== taskId);
        saveTasksToLocalStorage();
        renderTasks();
    }

    function saveTasksToLocalStorage() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function loadTasksFromLocalStorage() {
        const tasksString = localStorage.getItem("tasks");
        if (tasksString) {
            tasks = JSON.parse(tasksString);
            renderTasks();
        }
    }
    loadTasksFromLocalStorage();
};
