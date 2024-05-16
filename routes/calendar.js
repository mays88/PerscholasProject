import express from "express";
export const router = express.Router();

router.get("/", (req, res) => {
    res.send("Calendar Page");
});
router.get("/:id", (req, res) => {
    res.send("Get Calendar Item");
});

// module.exports = router;
