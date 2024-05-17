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

// router.get("/new", (req, res) => {
//     res.render("todos/new", { taskName: "Task Name" });
// });

router.route("/").post(createTodo).get(getTodos);
router.route("/:id").get(getTodo).patch(updateTodo).delete(deleteTodo);

// router.param("id", (req, res, next, id) => {
//     req.todo = todos[id];
//     next();
// });
