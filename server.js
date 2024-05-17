import express from "express";
import morgan from "morgan";
import { router as todoRouter } from "./routes/todos.js";
import { router as calendarRouter } from "./routes/calendar.js";
import { router as userRouter } from "./routes/users.js";

const app = express();
const port = 4000;

app.use(morgan("dev"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

app.use("/api/v1/todos", todoRouter);
app.use("/api/v1/calendar", calendarRouter);
app.use("/api/v1/users", userRouter);

// Global Error Handler Middleware
app.use((err, req, res, next) => {
    res.status(500).send("Server Error!");
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
