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
    let allTask = document.querySelector(".navbar-nav");
    let allPost = postId.todos;

    // console.log(allTask);
    for (let post in allPost) {
        let reqPost = allPost[post];
        // let commentEmail = document.createElement("h4");

        let todoTitle = reqPost.todo;
        // let todoTitle = reqPost.todo;
        // let todoTitle = reqPost.todo;
        // let commentBody = document.createElement("p");
        // let userEmail = comment.email;
        // let commentText = comment.body;
        // commentEmail.textContent = userEmail;
        // commentBody.textContent = commentText;
        // allComment.appendChild(commentEmail);
        // allComment.appendChild(commentBody);
        console.log(allPost[post]);
    }

    // console.log(allPost[0].id);
}
