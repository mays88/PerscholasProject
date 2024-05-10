const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Planner Page");
});
router.get("/new", (req, res) => {
    res.send("Create Planner Item");
});

module.exports = router;
