const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

const todoRouter = require("./routes/todos");
const plannerRouter = require("./routes/planner");

app.use("/todos", todoRouter);
app.use("/planner", plannerRouter);

app.listen(3000);
