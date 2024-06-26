import { users } from "../data/users.js";
export const getUsers = (req, res) => {
    let filteredUsers = users;

    if (req.query.email) {
        const email = req.query.email;
        filteredUsers = filteredUsers.filter((user) => user.email === email);
    }

    if (req.query.username) {
        const username = req.query.username;
        filteredUsers = filteredUsers.filter(
            (user) => user.username === username
        );
    }

    res.status(200).json({
        status: "Success",
        results: users.length,
        data: {
            users: filteredUsers,
        },
    });
};

export const getUser = (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id === id);

    if (!user) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid ID",
        });
    }

    res.status(200).json({
        status: "Success",
        data: {
            user,
        },
    });
};

export const createUser = (req, res) => {
    const newId = users[users.length - 1].id + 1;
    const newUser = Object.assign({ id: newId }, req.body);
    users.push(newUser);
    res.status(201).json({
        status: "Success",
        data: {
            user: newUser,
        },
    });
};

export const updateUser = (req, res) => {
    const id = parseInt(req.params.id);

    if (id > users.length) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid ID",
        });
    }

    res.status(200).json({
        status: "Success",
        data: {
            user: req.body,
        },
    });
};

export const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);

    if (id > users.length) {
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
