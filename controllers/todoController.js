import { todoList } from "../data/todos.js";

export const getTodos = (req, res) => {
    res.send(todoList);
};

export const getTodo = (req, res) => {
    console.log(req.todo);
    res.send(`Get Todo With ID of ${req.params.id}`);
};

export const updateTodo = (req, res) => {
    res.send(`Update Todo With ID of ${req.params.id}`);
};

export const deleteTodo = (req, res) => {
    req.params.id;
    res.send(`Delete Todo With ID of ${req.params.id}`);
};

export const createTodo = (req, res, next) => {
    const isValid = false;
    if (isValid) {
        todos.push({ taskName: req.body.taskName });
        res.redirect(`/todos/${todos.length - 1}`);
    } else {
        next(error(400, "Invalid Task"));
        res.render("users/new", { taskName: req.body.taskName });
    }
};
