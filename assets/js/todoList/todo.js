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
        let taskContainer = document.createElement("div");
        let taskCat = document.createElement("p");
        let taskTitle = document.createElement("p");
        let taskSpacer = document.createElement("span");
        let taskDate = document.createElement("p");
        // let taskDate = new Date();

        let todoTitle = reqPost.todo;

        allTask.appendChild(taskLi);
        taskLi.appendChild(taskDate);
        taskLi.appendChild(taskSpacer);
        taskLi.appendChild(taskContainer);
        taskContainer.appendChild(taskCat);
        taskContainer.appendChild(taskTitle);

        taskLi.classList.add("todo-task");
        taskContainer.classList.add("todo-task-container");
        taskDate.classList.add("todo-task-date");
        taskSpacer.classList.add("todo-task-span");
        taskCat.classList.add("todo-task-category");
        taskTitle.classList.add("todo-task-title");

        taskDate.textContent = "6:00 - 7:00";
        taskCat.textContent = "Finance";
        taskTitle.textContent = todoTitle;

        console.log(allPost[post]);
    }

    // console.log(allPost[0].id);
}
