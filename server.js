import express from "express";
import { router as todoRouter } from "./routes/todos.js";
import { router as calendarRouter } from "./routes/calendar.js";
import { router as userRouter } from "./routes/users.js";

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

app.use("/todos", todoRouter);
app.use("/calendar", calendarRouter);
app.use("/users", userRouter);

// Global Error Handler Middleware
app.use((err, req, res, next) => {
    res.status(500).send("Server Error!");
});

app.listen(3000);
