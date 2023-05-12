import { Request, Response } from "express";

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
app.use(morgan("dev"));

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://root:muilyang@mongodb:27017/admin")
  .then(() => console.log("Connected !!"))
  .catch((err: Error) => console.log(err));

const valueSchema = new mongoose.Schema({
  value: String,
});
const valueModel = mongoose.model("Value", valueSchema);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to 8000 port.");
});

app.get("/save-data/:value", async (req: Request, res: Response) => {
  const value = req.params.value;
  const result = await valueModel.create({ value: value });
  res.send(`Saved - ${result}`);
});

app.get("/read-data", async (req: Request, res: Response) => {
  const result = await valueModel.find({});

  res.send(result);
});

app.listen(8000, () => console.log("Listening on port 8000."));
