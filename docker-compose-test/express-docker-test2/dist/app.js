"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.get("/", function (req, res) {
    res.send("Welcome to 7000 port.");
});
app.listen(7000, () => console.log("Listening on port 7000."));
