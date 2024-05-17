import express from "express";
import { error } from "../utilities/error.js";
import {
    getTodo,
    updateTodo,
    deleteTodo,
    createTodo,
    getTodos,
} from "../controllers/todoController.js";

export const router = express.Router();

router.use(todoSome);

router.get("/new", (req, res) => {
    res.render("todos/new", { taskName: "Task Name" });
});

router.route("/").post(createTodo).get(getTodos);
router.route("/:id").get(getTodo).put(updateTodo).delete(deleteTodo);

router.param("id", (req, res, next, id) => {
    req.todo = todos[id];
    next();
});

function todoSome(req, res, next) {
    console.log(
        `Using this middleware in express in the direct todo route file. We are currently on route ${req.originalUrl}.`
    );
    next();
}
