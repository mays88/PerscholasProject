# SBA - 316 - The Document Object Model

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

## Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.

## Modify at least one attribute of an element in response to user interaction.

## Register at least two different event listeners and create the associated event handler functions.

## Use at least two Browser Object Model (BOM) properties or methods.

## Include at least one form and/or input with HTML attribute validation.

## Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.)

## Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).

# SBA - 308A - Javascript Web Application

## Use the fetch API or Axios to communicate with an external web API. Use the data provided by this API to populate your application’s content and features.

todos.js contains a communication with an external API using AXIOS.

## Create user interaction with the API through a search feature, paginated gallery, or similar. This feature should use GET requests to retrieve associated data.

## Enable user manipulation of data within the API through the use of POST, PUT, or PATCH requests. Ensure your chosen API supports this feature before beginning.

(SKIP FOR NOW)

## Make use of Promises and async/await syntax as appropriate.

todos.js contains an async function that awaits the results from the ToDo API.

## Organize your JavaScript code into at least three (3) different module files, and import functions and data across files as necessary.

My current structure includes the main index.js file along with a todo.js file that handles retrieving the list of task. There is also a link to the calendar.js file which will be used to populate the calendar.

## Ensure the program runs as expected, without any undesired behavior caused by misunderstanding of the JavaScript event loop (such as race conditions, API calls being handled out of order, etc.).

## Create an engaging user experience through the use of HTML and CSS.

## Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).
