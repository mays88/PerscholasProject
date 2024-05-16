import express from "express";
export const router = express.Router();

router.get("/", (req, res) => {
    res.send("Users Page");
});
router.get("/:id", (req, res) => {
    res.send("Get User");
});
