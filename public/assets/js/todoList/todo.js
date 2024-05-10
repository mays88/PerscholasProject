export async function getTask() {
    try {
        const response = await axios.get(`https://dummyjson.com/todos`);
        // const postId = postInput.value;
        // const postTitle = document.querySelector("#postTitle");
        // const postBody = document.querySelector("#postBody");

        // postTitle.textContent = response.data.title;
        // postBody.textContent = response.data.body;

        populateTask(response.data);
        // const result = response.data;
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

function populateTask(postId) {
    let allTask = document.getElementById("todo-list");
    let allPost = postId.todos;

    // console.log(allTask);
    for (let post in allPost) {
        let reqPost = allPost[post];
        let taskLi = document.createElement("li");
        let taskAnchor = document.createElement("a");
        let taskContainer = document.createElement("div");
        let taskCat = document.createElement("p");
        let taskTitle = document.createElement("p");
        let taskSpacer = document.createElement("span");
        let taskDate = document.createElement("p");
        // let taskDate = new Date();

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

// export async function addTask() {
//     const addTask = document.getElementById("add-task");
//     addTask.addEventListener("click", createTask);
//     console.log(addTask);

//     function createTask() {
//         console.log("POP UP FOR ADD TASK");
//     }
// }
