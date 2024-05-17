import { todos } from "../data/todos.js";

export const getTodos = (req, res) => {
    res.status(200).json({
        status: "Success",
        results: todos.length,
        data: {
            todos,
        },
    });
};

export const getTodo = (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find((todo) => todo.id === id);

    if (!todo) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid ID",
        });
    }

    res.status(200).json({
        status: "Success",
        data: {
            todo,
        },
    });
};

export const createTodo = (req, res) => {
    const newId = todos[todos.length - 1].id + 1;
    const newTodo = Object.assign({ id: newId }, req.body);
    todos.push(newTodo);
    res.status(201).json({
        status: "Success",
        data: {
            todo: newTodo,
        },
    });
};

export const updateTodo = (req, res) => {
    const id = parseInt(req.params.id);

    if (id > todos.length) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid ID",
        });
    }

    res.status(200).json({
        status: "Success",
        data: {
            todo: req.body,
        },
    });
};

export const deleteTodo = (req, res) => {
    const id = parseInt(req.params.id);

    if (id > todos.length) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid ID",
        });
    }

    res.status(204).json({
        status: "Success",
        data: null,
    });
};
