import { Request, Response } from "express";

const express = require("express");
const app = express();

app.get("/", function (req: Request, res: Response) {
  res.send("Welcome to 7000 port.");
});

app.listen(7000, () => console.log("Listening on port 7000."));
