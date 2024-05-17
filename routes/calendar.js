import express from "express";
import {
    getEvent,
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent,
} from "../controllers/calendarController.js";
export const router = express.Router();

//Routes
router.route("/").get(getEvents).post(createEvent);

router.route("/:id").get(getEvent).patch(updateEvent).delete(deleteEvent);
