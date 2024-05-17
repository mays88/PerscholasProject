import { todoList } from "../data/todos.js";

export const getTodos = (req, res) => {
    res.send(todoList);
};

export const getTodo = (req, res) => {
    res.send(`Get Todo With ID of ${req.params.id}`);
};

export const updateTodo = (req, res) => {
    res.send(`Update Todo With ID of ${req.params.id}`);
};

export const deleteTodo = (req, res) => {
    req.params.id;
    res.send(`Delete Todo With ID of ${req.params.id}`);
};

export const createTodo = (req, res) => {
    res.send(`Create Todo With ID of ${req.params.id}`);
};
