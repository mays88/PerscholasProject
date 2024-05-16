export async function getTask() {
    try {
        const response = await axios.get(`https://dummyjson.com/todos`);

        populateTask(response.data.todos);

        return response.data.todos;
    } catch (error) {
        console.error(error);
    }
}

function populateTask(todos) {
    const allTask = document.getElementById("todo-list");
    const allPost = todos;

    for (let post in allPost) {
        let reqPost = allPost[post];

        let taskLi = document.createElement("li");
        let taskAnchor = document.createElement("a");
        let taskContainer = document.createElement("div");
        let taskCat = document.createElement("p");
        let taskTitle = document.createElement("p");
        let taskSpacer = document.createElement("span");
        let taskDate = document.createElement("p");

        let todoTitle = reqPost.todo;

        allTask.appendChild(taskLi);

        taskLi.appendChild(taskAnchor);
        taskAnchor.appendChild(taskDate);
        taskAnchor.appendChild(taskSpacer);
        taskAnchor.appendChild(taskContainer);
        taskContainer.appendChild(taskCat);
        taskContainer.appendChild(taskTitle);

        taskLi.classList.add("todo-task");
        taskContainer.classList.add("todo-task-container");
        taskDate.classList.add("todo-task-date");
        taskSpacer.classList.add("todo-task-span");
        taskCat.classList.add("todo-task-category");
        taskTitle.classList.add("todo-task-title");
        taskAnchor.classList.add("todo-task-anchor");

        taskAnchor.setAttribute("href", "");

        taskDate.textContent = "6:00 - 7:00";
        taskCat.textContent = "Finance";
        taskSpacer.textContent = " | ";
        taskTitle.textContent = todoTitle;
    }
}

export async function filterTask(keyword) {
    const todos = await getTask();

    const filteredTodos = todos.filter((todo) =>
        todo.todo.toLowerCase().includes(keyword.toLowerCase())
    );
    console.log(filteredTodos);
    populateTask(filteredTodos);
}

export function addTask(event) {
    function validateEvent(event) {
        const category = event.target[0].value;
        const title = event.target[1].value;

        if (category.length < 2) {
            window.alert("Category must be more than one character");
        } else if (title.length < 6) {
            alert("Title must be more than five characters");
        }
    }
    validateEvent(event);
    event.preventDefault();

    const category = document.getElementById("category").value;
    const title = document.getElementById("title").value;

    async function createTask(category, title) {
        const allTask = document.getElementById("todo-list");
        let taskLi = document.createElement("li");
        let taskAnchor = document.createElement("a");
        let taskContainer = document.createElement("div");
        let taskCat = document.createElement("p");
        let taskTitle = document.createElement("p");
        let taskSpacer = document.createElement("span");
        let taskDate = document.createElement("p");

        allTask.prepend(taskLi);

        taskLi.appendChild(taskAnchor);
        taskAnchor.appendChild(taskDate);
        taskAnchor.appendChild(taskSpacer);
        taskAnchor.appendChild(taskContainer);
        taskContainer.appendChild(taskCat);
        taskContainer.appendChild(taskTitle);

        taskLi.classList.add("todo-task");
        taskContainer.classList.add("todo-task-container");
        taskDate.classList.add("todo-task-date");
        taskSpacer.classList.add("todo-task-span");
        taskCat.classList.add("todo-task-category");
        taskTitle.classList.add("todo-task-title");
        taskAnchor.classList.add("todo-task-anchor");

        taskAnchor.setAttribute("href", "");

        taskDate.textContent = "6:00 - 7:00";
        taskSpacer.textContent = " | ";

        const { data } = await axios.post(
            "https://dummyjson.com/todos/add",
            {
                todo: title,
                completed: false,
                userId: 1,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        taskCat.textContent = category;
        taskTitle.textContent = data.todo;
    }

    createTask(category, title);
    document.getElementById("myForm").style.display = "none";
}
