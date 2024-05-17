import { events } from "../data/calendar.js";
export const getEvents = (req, res) => {
    res.status(200).json({
        status: "Success",
        results: events.length,
        data: {
            events,
        },
    });
};

export const getEvent = (req, res) => {
    const id = parseInt(req.params.id);
    const event = events.find((event) => event.id === id);

    if (!event) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid ID",
        });
    }

    res.status(200).json({
        status: "Success",
        data: {
            event,
        },
    });
};

export const createEvent = (req, res) => {
    const newId = events[events.length - 1].id + 1;
    const newEvent = Object.assign({ id: newId }, req.body);
    events.push(newEvent);
    res.status(201).json({
        status: "Success",
        data: {
            event: newEvent,
        },
    });
};

export const updateEvent = (req, res) => {
    const id = parseInt(req.params.id);

    if (id > events.length) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid ID",
        });
    }

    res.status(200).json({
        status: "Success",
        data: {
            event: req.body,
        },
    });
};

export const deleteEvent = (req, res) => {
    const id = parseInt(req.params.id);

    if (id > events.length) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid ID",
        });
    }

    res.status(204).json({
        status: "Success",
        data: null,
    });
};
