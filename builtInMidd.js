import express from "express";
import path from "path";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static("cssFile"));

app.get("/", (req, res) => {
    const filePath = path.resolve("html/home.html");
    res.sendFile(filePath);
});

app.get("/login", (req, res) => {
    res.send(`
        <form action="/submit" method="post">
            <input type="text" placeholder="Enter email..." name="email">
            <br><br>
            <input type="password" placeholder="Enter password..." name="password">
            <br><br>
            <button>Login</button>
        </form>
    `);
});

app.post("/submit", (req, res) => {
    console.log("User login details:", req.body);
    res.send("Data Submitted");
});

app.get("/user", (req, res) => {
    res.send("User Page");
});

app.listen(3100)