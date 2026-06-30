import { usersLists } from "../model/userModel.js";

export function handleUsers(req, res) {
    const usersData = usersLists();

    res.render("user", {
        user: usersData
    });
}