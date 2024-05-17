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

router.route("/").post(createTodo).get(getTodos);
router.route("/:id").get(getTodo).patch(updateTodo).delete(deleteTodo);
