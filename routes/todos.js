import { todoList } from "../data/todos.js";
import express from "express";
import { error } from "../utilities/error.js";

export const router = express.Router();
router.use(todoSome);

router.get("/", (req, res) => {
    res.send(todoList);
});

router.get("/new", (req, res) => {
    res.render("todos/new", { taskName: "Task Name" });
});

router.post("/", (req, res, next) => {
    const isValid = false;
    if (isValid) {
        todos.push({ taskName: req.body.taskName });
        res.redirect(`/todos/${todos.length - 1}`);
    } else {
        next(error(400, "Invalid Task"));
        res.render("users/new", { taskName: req.body.taskName });
    }
});

router
    .route("/:id")
    .get((req, res) => {
        console.log(req.todo);
        res.send(`Get Todo With ID of ${req.params.id}`);
    })
    .put((req, res) => {
        res.send(`Update Todo With ID of ${req.params.id}`);
    })
    .delete((req, res) => {
        req.params.id;
        res.send(`Delete Todo With ID of ${req.params.id}`);
    });

const todos = [
    { task: "Work on resume" },
    { task: "30 minute workout" },
    { task: "Date with wife" },
    { task: "Programming session" },
];

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

// module.exports = router;
