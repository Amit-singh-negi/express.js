import express from "express";
import submit from "./loginPages/submit.js";
import login from "./loginPages/login.js";
import home from "./loginPages/home.js";
const app = express();

app.get("/", (req, res) => {
  res.send(home());
});

app.get("/login", (req, res) => {
  res.send(login());
});
app
  .post("/submit", (req, res) => {
    res.send(submit());
  })
  .listen(1800);
