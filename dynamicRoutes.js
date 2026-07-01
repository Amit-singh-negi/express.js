import express from "express";

const app = express();

app.get("/", (req, res) => {
    const users = ["anil", "sam", "peter", "sidhu"];

    let data = "<ul>";

    for (let i = 0; i < users.length; i++) {
        const displayName =
            users[i].charAt(0).toUpperCase() + users[i].slice(1);

        data += `<li><a href="/user/${users[i]}">${displayName}</a></li>`;
    }

    data += "</ul>";

    res.send(data);
});

app.get("/user/:name", (req, res) => {
    const userName =
        req.params.name.charAt(0).toUpperCase() + req.params.name.slice(1);
// console.log(req.params.name);
    res.send(`This is ${userName}'s profile page`);
});

app.listen(3400)