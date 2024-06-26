# Scaling Project - With each section covered, I will implement new features or concepts that will benefit the end goal. Below are the SBAs and eventually the capstone. This project will grow larger and more functional.

## Figma Board

https://www.figma.com/design/gd9B2rFFnODgm3ugErgRHz/TBT?node-id=0-1&t=5jvdHxykKDnojQyn-0

<details><summary>SBA 318 - Express Server Application</summary>

## Create and use at least two pieces of custom middleware.

server.js contains multiple middleware functions.

## Create and use error-handling middleware.

added global error handling Middleware to server.js

## Use at least three different data categories (e.g., users, posts, or comments).

there are three data categories in the data folder - calendar data that describes events on a particular date. Todo data that describes new, pending, or completed task. Users that describes the users within the community.

## Utilize reasonable data structuring practices.

Created Error handling, separation of concerns, and have a consistent data model.

## Create GET routes for all data that should be exposed to the client.

GET routes have been created for Todos, Users, and Calendar.

## Create POST routes for data, as appropriate. At least one data category should allow for client creation via a POST request.

Inside of each of the Calendar, Todos, and Users route files. You will find the POST method and inside the Controller files are the functions for each POST request.

## Create PATCH or PUT routes for data, as appropriate. At least one data category should allow for client manipulation via a PATCH or PUT request.

Inside of each of the Calendar, Todos, and Users route files. You will find the PATCH method and inside the Controller files are the functions for each PATCH request.

## Create DELETE routes for data, as appropriate. At least one data category should allow for client deletion via a DELETE request.

Inside of each of the Calendar, Todos, and Users route files. You will find the DELETE method and inside the Controller files are the functions for each DELETE request.

## Include query parameters for data filtering, where appropriate. At least one data category should allow for additional filtering through the use of query parameters. Note: DO NOT use API keys; this makes it more difficult for instructors to grade finished projects efficiently.

Todo parameters - completed = boolean, category
Calendar parameters - date, title
Users parameters - email, username

## Utilize route parameters, where appropriate.

Each route has the proper route parameters to get, update, delete a single document.

## Adhere to the guiding principles of REST.

I used the main HTTP methods, proper endpoints, uniform interface, not storing state anywhere.

## Create and render at least one view using a view template and template engine. This can be a custom template engine or a third-party engine. If you are stuck on how to approach this, think about ways you could render the current state of your API's data for easy viewing.

Used the ejs view engine to render a form with text input field and a submit button

## Use simple CSS to style the rendered views. Note: This is not a test of design; it is a test of serving static files using Express. The CSS can be very simple.

## Include a form within a rendered view that allows for interaction with your RESTful API.

## Utilize reasonable code organization practices.

Refactored code for separation of concerns.

</details>

<details><summary>SBA - 308A - Javascript Web Application</summary>

## Use the fetch API or Axios to communicate with an external web API. Use the data provided by this API to populate your application’s content and features.

todos.js contains a communication with an external API using AXIOS.

## Create user interaction with the API through a search feature, paginated gallery, or similar. This feature should use GET requests to retrieve associated data.

\*\*\*Struggle with getting search feature working. Paused to retry later. Properly updated in console. Dom has frozen and not updating. Will conduct further research on solution. Functions on todo.js

## Enable user manipulation of data within the API through the use of POST, PUT, or PATCH requests. Ensure your chosen API supports this feature before beginning.

todo.js there is a post request to add a todo to the top of the todo list.

## Make use of Promises and async/await syntax as appropriate.

todos.js contains an async function that awaits the results from the ToDo API.

## Organize your JavaScript code into at least three (3) different module files, and import functions and data across files as necessary.

My current structure includes the main index.js file along with a todo.js file that handles retrieving the list of task. There is also a link to the calendar.js file which will be used to populate the calendar.

## Ensure the program runs as expected, without any undesired behavior caused by misunderstanding of the JavaScript event loop (such as race conditions, API calls being handled out of order, etc.).

## Create an engaging user experience through the use of HTML and CSS.

## Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).

</details>

<details>
<summary>SBA - 316 - The Document Object Model</summary>

## Cache at least one element using selectElementById.

index.js has todoTask using getElementById

## Cache at least one element using querySelector or querySelectorAll.

index.js has todoItmes using querySelectorAll

## Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).

index.js contains - todoTask.firstChild.nextSibling.textContent = "Go over Budget";

## Iterate over a collection of elements to accomplish some task.

todo.js contains a populateTask function that iterates over the list of task and puts out a task with the HTML structure for the TODO list.

## Create at least one element using createElement.

todo.js in the populateTask function there is a for loop with multiple elements being created using createElement.

## Use appendChild and/or prepend to add new elements to the DOM.

todo.js in the populateTask function there is a for loop with multiple elements being appended using appendChild.

## Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content.

index.js contains cloneNode for fav buttons.

## Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.

todo.js created an addTask() function that adds a new todo to the top of the todo list.

## Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.

todo.js created an addTask() function that adds a new todo, after submit is clicked the style of the form - myForm is set to "display = "none""

## Modify at least one attribute of an element in response to user interaction.

todo.js when adding a task, the user creates a task with an anchor that uses "taskAnchor.setAttribute("href", "");"

## Register at least two different event listeners and create the associated event handler functions.

index.js contains multiple eventlisteners as well as the functions that accompany those listeners.

openBtn.addEventListener("click", () => {
openForm();
});
closeBtn.addEventListener("click", () => {
closeForm();
});

addTaskForm.addEventListener("submit", addTask);

function openForm() {
document.getElementById("myForm").style.display = "block";
}

function closeForm() {
document.getElementById("myForm").style.display = "none";
}

The addTask function is apart of the todo.js file

## Use at least two Browser Object Model (BOM) properties or methods.

index.js containes multiple BOM properties window.document.getElementById to retrieve elements as well as window.navigator.language to display users language.

## Include at least one form and/or input with HTML attribute validation.

index.html has a form to add a task that has the required attribute.

## Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.)

Added event based validation to todo.js addTask function. Category must contain more than one character and title must contain more than 5 characters.

## Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).

Everything has been checked to be running.

</details>
