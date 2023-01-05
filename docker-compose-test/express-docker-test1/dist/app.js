"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
app.use(morgan("dev"));
mongoose.set("strictQuery", false);
mongoose
    .connect("mongodb://root:muilyang@mongodb:27017/admin")
    .then(() => console.log("Connected !!"))
    .catch((err) => console.log(err));
const valueSchema = new mongoose.Schema({
    value: String,
});
const valueModel = mongoose.model("Value", valueSchema);
app.get("/", (req, res) => {
    res.send("Welcome to 8000 port.");
});
app.get("/save-data/:value", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const value = req.params.value;
    const result = yield valueModel.create({ value: value });
    res.send(`Saved - ${result}`);
}));
app.get("/read-data", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield valueModel.find({});
    res.send(result);
}));
app.listen(8000, () => console.log("Listening on port 8000."));
