import { getTask } from "../todoList/todo.js";

const API_URL = "https://jsonplaceholder.typicode.com/photos";

const gallery = document.querySelector(".gallery");
const searchInput = document.querySelector(".search-input");

function fetchPhotos() {
    fetch(API_URL)
        .then((response) => response.json())
        .then((photos) => {
            displayPhotos(photos);
        })
        .catch((error) => console.error("Error fetching photos:", error));
}

const tasks = getTask();

displayTasks(tasks);
function displayTasks(tasks) {
    gallery.innerHTML = "";
    tasks.forEach((photo) => {
        const item = document.createElement("div");
        item.classList.add("gallery-item");
        const img = document.createElement("img");
        img.src = photo.thumbnailUrl;
        item.appendChild(img);
        gallery.appendChild(item);
    });
}

function filterTasks(keyword) {
    const filteredTasks = tasks.filter((task) =>
        task.todos.toLowerCase().includes(keyword.toLowerCase())
    );
    displayTasks(filteredTasks);
}

// Initial fetch

// Event listener for search input
searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.trim();
    filterTasks(keyword);
});
