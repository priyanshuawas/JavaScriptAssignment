<<<<<<< HEAD
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

=======
>>>>>>> be013830c7b32bef5c7d418508d1fdfdc0aa8c46
// window.onload = () => {
//     const form1 = document.querySelector("#addForm");
//     const todoBoard = document.getElementById("todo-board");
//     const inProgressBoard = document.getElementById("inprogress-board");
//     const completedBoard = document.getElementById("completed-board");
<<<<<<< HEAD

//     let tasks = [];

//     form1.addEventListener("submit", addItem);

//     function addItem(e) {
//         e.preventDefault();

//         const taskName = document.getElementById("item").value;
//         const dueDate = document.getElementById("dueDate").value;

=======
//     let tasks = [];
//     form1.addEventListener("submit", addItem);
//     function addItem(e) {
//         e.preventDefault();
//         const taskName = document.getElementById("item").value;
//         const dueDate = document.getElementById("dueDate").value;
//         const description = document.getElementById("description").value;
>>>>>>> be013830c7b32bef5c7d418508d1fdfdc0aa8c46
//         if (taskName.trim() === "" || dueDate.trim() === "") {
//             alert("Please enter task name and due date.");
//             return;
//         }
<<<<<<< HEAD

=======
>>>>>>> be013830c7b32bef5c7d418508d1fdfdc0aa8c46
//         const task = {
//             id: Date.now().toString(),
//             name: taskName,
//             dueDate: dueDate,
<<<<<<< HEAD
=======
//             description: description.substring(0, 2000), // Limit description to 2000 characters
>>>>>>> be013830c7b32bef5c7d418508d1fdfdc0aa8c46
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

<<<<<<< HEAD
=======
//             const description = document.createElement("p");
//             description.classList.add("card-description");
//             description.textContent = task.description;

>>>>>>> be013830c7b32bef5c7d418508d1fdfdc0aa8c46
//             const moveButton = document.createElement("button");
//             moveButton.classList.add("btn", "btn-info", "float-right", "ml-2");
//             moveButton.textContent = "Move";
//             moveButton.addEventListener("click", () => {
//                 moveTask(task.id);
//             });
<<<<<<< HEAD

=======
//             const editButton = document.createElement("button");
//             editButton.classList.add("btn", "btn-primary", "float-right", "ml-2");
//             editButton.textContent = "Edit";
//             editButton.addEventListener("click", () => {
//                 editTask(task.id);
//             });
>>>>>>> be013830c7b32bef5c7d418508d1fdfdc0aa8c46
//             const deleteButton = document.createElement("button");
//             deleteButton.classList.add("btn", "btn-danger", "float-right", "ml-2");
//             deleteButton.textContent = "Delete";
//             deleteButton.addEventListener("click", () => {
//                 deleteTask(task.id);
//             });
<<<<<<< HEAD

//             cardBody.appendChild(taskName);
//             cardBody.appendChild(dueDate);
//             cardBody.appendChild(moveButton);
//             cardBody.appendChild(deleteButton);
//             taskCard.appendChild(cardBody);

=======
//             cardBody.appendChild(taskName);
//             cardBody.appendChild(dueDate);
//             cardBody.appendChild(description); // Add description to card body
//             cardBody.appendChild(moveButton);
//             cardBody.appendChild(editButton);
//             cardBody.appendChild(deleteButton);
//             taskCard.appendChild(cardBody);
>>>>>>> be013830c7b32bef5c7d418508d1fdfdc0aa8c46
//             if (task.status === "todo") {
//                 todoBoard.appendChild(taskCard);
//             } else if (task.status === "inprogress") {
//                 inProgressBoard.appendChild(taskCard);
//             } else if (task.status === "completed") {
//                 completedBoard.appendChild(taskCard);
//             }
//         });
//     }
<<<<<<< HEAD

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
=======
//     function moveTask(id) {
//         const index = tasks.findIndex(task => task.id === id);
//         if (index !== -1) {
//             const task = tasks[index];
//             if (task.status === "todo") {
//                 task.status = "inprogress";
//             } else if (task.status === "inprogress") {
//                 task.status = "completed";
//             }
//             saveTasksToLocalStorage();
>>>>>>> be013830c7b32bef5c7d418508d1fdfdc0aa8c46
//             renderTasks();
//         }
//     }

<<<<<<< HEAD
=======
//     function editTask(id) {
//         const index = tasks.findIndex(task => task.id === id);
//         if (index !== -1) {
//             const task = tasks[index];
//             const newName = prompt("Enter new name for the task:", task.name);
//             if (newName !== null) {
//                 task.name = newName;
//                 saveTasksToLocalStorage();
//                 renderTasks();
//             }
//         }
//     }

//     function deleteTask(id) {
//         const confirmation = confirm("Are you sure you want to delete this task?");
//         if (confirmation) {
//             tasks = tasks.filter(task => task.id !== id);
//             saveTasksToLocalStorage();
//             renderTasks();
//         }
//     }
//     function saveTasksToLocalStorage() {
//         localStorage.setItem("tasks", JSON.stringify(tasks));
//     }
//     function loadTasksFromLocalStorage() {
//         const storedTasks = localStorage.getItem("tasks");
//         if (storedTasks) {
//             tasks = JSON.parse(storedTasks);
//             renderTasks();
//         }
//     }
>>>>>>> be013830c7b32bef5c7d418508d1fdfdc0aa8c46
//     loadTasksFromLocalStorage();
// };
window.onload = () => {
    const form1 = document.querySelector("#addForm");
    const todoBoard = document.getElementById("todo-board");
    const inProgressBoard = document.getElementById("inprogress-board");
    const completedBoard = document.getElementById("completed-board");
<<<<<<< HEAD

    let tasks = [];

=======
    let tasks = [];

    // Event listener for form submission
>>>>>>> be013830c7b32bef5c7d418508d1fdfdc0aa8c46
    form1.addEventListener("submit", addItem);

    function addItem(e) {
        e.preventDefault();
<<<<<<< HEAD

        const taskName = document.getElementById("item").value;
        const dueDate = document.getElementById("dueDate").value;

=======
        const taskName = document.getElementById("item").value;
        const dueDate = document.getElementById("dueDate").value;
        const description = document.getElementById("description").value;
>>>>>>> be013830c7b32bef5c7d418508d1fdfdc0aa8c46
        if (taskName.trim() === "" || dueDate.trim() === "") {
            alert("Please enter task name and due date.");
            return;
        }
<<<<<<< HEAD

=======
>>>>>>> be013830c7b32bef5c7d418508d1fdfdc0aa8c46
        const task = {
            id: Date.now().toString(),
            name: taskName,
            dueDate: dueDate,
<<<<<<< HEAD
=======
            description: description.substring(0, 2000), // Limit description to 2000 characters
>>>>>>> be013830c7b32bef5c7d418508d1fdfdc0aa8c46
            status: "todo" // Default status is "To Do"
        };

        tasks.push(task);
<<<<<<< HEAD
        saveTasksToLocalStorage();
        renderTasks();
=======
        saveTasksToDatabase(task); // Save task to the database
        renderTasks(); // Render tasks on UI
>>>>>>> be013830c7b32bef5c7d418508d1fdfdc0aa8c46
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

<<<<<<< HEAD
=======
            const description = document.createElement("p");
            description.classList.add("card-description");
            description.textContent = task.description;

>>>>>>> be013830c7b32bef5c7d418508d1fdfdc0aa8c46
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
<<<<<<< HEAD
=======
            cardBody.appendChild(description);
>>>>>>> be013830c7b32bef5c7d418508d1fdfdc0aa8c46
            cardBody.appendChild(moveButton);
            cardBody.appendChild(editButton);
            cardBody.appendChild(deleteButton);
            taskCard.appendChild(cardBody);
<<<<<<< HEAD

=======
>>>>>>> be013830c7b32bef5c7d418508d1fdfdc0aa8c46
            if (task.status === "todo") {
                todoBoard.appendChild(taskCard);
            } else if (task.status === "inprogress") {
                inProgressBoard.appendChild(taskCard);
            } else if (task.status === "completed") {
                completedBoard.appendChild(taskCard);
            }
        });
    }
<<<<<<< HEAD
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
=======

    function moveTask(id) {
        const index = tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            const task = tasks[index];
            if (task.status === "todo") {
                task.status = "inprogress";
            } else if (task.status === "inprogress") {
                task.status = "completed";
            }
            // Update task status in the database
            updateTaskStatus(task.id, task.status);
>>>>>>> be013830c7b32bef5c7d418508d1fdfdc0aa8c46
            renderTasks();
        }
    }

<<<<<<< HEAD
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
=======
    function editTask(id) {
        const index = tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            const task = tasks[index];
            const newName = prompt("Enter new name for the task:", task.name);
            if (newName !== null) {
                task.name = newName;
                // Update task name in the database
                updateTaskName(task.id, task.name);
                renderTasks();
            }
        }
    }

    function deleteTask(id) {
        const confirmation = confirm("Are you sure you want to delete this task?");
        if (confirmation) {
            tasks = tasks.filter(task => task.id !== id);
            // Delete task from the database
            deleteTaskFromDatabase(id);
            renderTasks();
        }
    }

    function saveTasksToDatabase(task) {
        // Implement your logic to save task to the database here
        // Use AJAX, Fetch API, or any other method to send data to the backend
        // Example:
        // fetch('api/addTask', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(task),
        // })
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.error('Error:', error));
    }

    function updateTaskStatus(taskId, status) {
        // Implement your logic to update task status in the database here
    }

    function updateTaskName(taskId, name) {
        // Implement your logic to update task name in the database here
    }

    function deleteTaskFromDatabase(taskId) {
        // Implement your logic to delete task from the database here
    }

    // Load tasks from the database on page load
    // Implement logic to fetch tasks from the database and populate the tasks array
    // Example:
    // fetch('api/getTasks')
    //     .then(response => response.json())
    //     .then(data => {
    //         tasks = data;
    //         renderTasks();
    //     })
    //     .catch(error => console.error('Error:', error));

    // For demonstration purposes, using a dummy tasks array
    tasks = [
        {
            id: '1',
            name: 'Task 1',
            dueDate: '2024-03-10',
            description: 'Description for Task 1',
            status: 'todo'
        },
        {
            id: '2',
            name: 'Task 2',
            dueDate: '2024-03-10',
            description: 'Description for Task 2',
            status: 'todo'
        },
        {
            id: '3',
            name: 'Task 3',
            dueDate: '2024-03-10',
            description: 'Description for Task 3',
            status: 'todo'
        }
    ];

    renderTasks();
>>>>>>> be013830c7b32bef5c7d418508d1fdfdc0aa8c46
};
