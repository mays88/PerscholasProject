// import { highlightElement } from "./todoList/todo";

const todoTask = document.getElementById("todo-list");

console.log(todoTask);

const todoItems = document.querySelectorAll("li.todo-task");

console.log(todoItems);

todoTask.addEventListener("click", highlightElement);

function highlightElement(e) {
    e.preventDefault();

    console.log(e.type);
}
