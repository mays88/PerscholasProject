import { getTask } from "./todoList/todo.js";

const todoTask = document.getElementById("todo-list");

// console.log(highlightElement());

const todoItems = document.querySelectorAll("li.todo-task");

// console.log(todoItems);

// console.log(todoTask.firstChild.nextSibling);

todoTask.firstChild.nextSibling.textContent = "Go over Budget";

for (let i = 0; i < todoItems.length; i++) {
    // console.log(todoItems[i]);
}

document.getElementById("todo-list").style.color = "green";

// console.log(document.querySelector("todo-lists"));

todoTask.addEventListener("click", (e) => {
    console.log(e.target);
});

const tasks = await getTask();

tasks.todos.forEach((element) => {
    // console.log(element);
});

// console.log(tasks.todos[0].id);
// const postInput = document.getElementById("post-number");
// const subButton = document.getElementById("req-sub");
// const commentContainer = document.getElementById("content-wrapper");

// async function getPost() {
//     try {
//         const postNumber = postInput.value;
//         const response = await axios.get(
//             `https://jsonplaceholder.typicode.com/posts/${postNumber}`
//         );
//         const postTitle = document.querySelector("#postTitle");
//         const postBody = document.querySelector("#postBody");

//         postTitle.textContent = response.data.title;
//         postBody.textContent = response.data.body;

//         getComments(postNumber);

//         return response.data;
//     } catch (error) {
//         console.error(error);
//     }
// }
// async function getComments(postnum) {
//     try {
//         const response = await axios.get(
//             `https://jsonplaceholder.typicode.com/comments?postId=${postnum}`
//         );

//         createComments(response.data);
//         return response.data;
//     } catch (error) {
//         console.error(error);
//     }
// }

// function createComments(comments) {
//     let allComment = document.querySelector(".commentSection");

//     console.log(allComment);
//     for (let comment of comments) {
//         let commentEmail = document.createElement("h4");

//         let commentBody = document.createElement("p");

//         let userEmail = comment.email;
//         let commentText = comment.body;

//         commentEmail.textContent = userEmail;
//         commentBody.textContent = commentText;
//         allComment.appendChild(commentEmail);
//         allComment.appendChild(commentBody);
//     }
// }

// subButton.addEventListener("click", getPost);
