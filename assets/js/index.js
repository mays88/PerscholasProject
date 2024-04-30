// import { highlightElement } from "./todoList/todo";

const todoTask = document.getElementById("todo-list");

console.log(todoTask);

const todoItems = document.querySelectorAll("li.todo-task");

console.log(todoItems);

console.log(todoTask.firstChild.nextSibling);

todoTask.firstChild.nextSibling.textContent = "Go over Budget";

for (let i = 0; i < todoItems.length; i++) {
    console.log(todoItems[i]);
}
