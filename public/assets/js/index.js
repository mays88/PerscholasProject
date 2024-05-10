import { getTask } from "./todoList/todo.js";
import { getCalendar } from "./calendar/calendar.js";

const todoTask = document.getElementById("todo-list");

const todoItems = document.querySelectorAll("li.todo-task");

for (let i = 0; i < todoItems.length; i++) {
    // console.log(todoItems[i]);
}

document.getElementById("todo-list").style.color = "green";

todoTask.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e);
});

const tasks = await getTask();

tasks.todos.forEach((element) => {
    // console.log(element);
});

const favbutton = document.getElementById("button-container");
function createFavButtons(icon) {
    const buttonTemplate = document.getElementById("favButtonTemplate");
    const clone = buttonTemplate.content.cloneNode(true);

    const iconElement = clone.querySelector("i");

    iconElement.setAttribute("class", icon);

    return clone;
}

(() => {
    const favIcons = [
        { icon: "fa-solid fa-list" },
        { icon: "fa-solid fa-coins" },
        { icon: "fa-solid fa-dumbbell" },
        { icon: "fa-solid fa-stopwatch" },
        { icon: "fa-solid fa-drumstick-bite" },
        { icon: "fa-solid fa-music" },
    ];

    favIcons.forEach((icon) => {
        favbutton.appendChild(createFavButtons(icon.icon));
    });
})();

getCalendar();

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

const openBtn = document.getElementById("openFormBtn");
const closeBtn = document.getElementById("closeFormBtn");

openBtn.addEventListener("click", () => {
    openForm();
});
closeBtn.addEventListener("click", () => {
    closeForm();
});
