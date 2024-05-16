import { getTask, addTask, filterTask } from "./todoList/todo.js";
import { getCalendar } from "./calendar/calendar.js";

const todoTask = document.getElementById("todo-list");

document.getElementById("todo-list").style.color = "green";

todoTask.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e);
});

await getTask();

const infoContent = window.document.getElementById("info-content");
infoContent.textContent = window.navigator.language;

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
const addTaskForm = document.getElementById("form-body-container");

openBtn.addEventListener("click", () => {
    openForm();
});
closeBtn.addEventListener("click", () => {
    closeForm();
});

addTaskForm.addEventListener("submit", addTask);
const searchInput = document.querySelector(".search-input");
searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.trim();
    filterTask(keyword);
});
