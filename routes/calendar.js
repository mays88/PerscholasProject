import express from "express";
import {
    getCalendar,
    getCalendars,
    createCalendar,
    updateCalendar,
    deleteCalendar,
} from "../controllers/calendarController.js";
export const router = express.Router();

//Routes
router.route("/").get(getCalendars).post(createCalendar);

router
    .route("/:id")
    .get(getCalendar)
    .patch(updateCalendar)
    .delete(deleteCalendar);
