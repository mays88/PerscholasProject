import express from "express";
import { users } from "../data/users.js";

export const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({
        status: "Success",
        results: users.length,
        data: {
            users,
        },
    });
});

router.post("/", (req, res) => {
    const newId = users[users.length - 1].id + 1;
    const newUser = Object.assign({ id: newId }, req.body);
    users.push(newUser);
    console.log(users);
    res.status(201).json({
        status: "Success",
        data: {
            users: newUser,
        },
    });
});

router.get("/:id", (req, res) => {
    console.log(req.params);
    res.status(200).json({
        status: "Success",
        // results: users.length,
        // data: {
        //     users,
        // },
    });
});
