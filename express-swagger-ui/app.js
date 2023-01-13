const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
app.use(express.json());

const memberRouter = require("./routes/member");
app.use("/member", memberRouter);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Muil's Server - Swagger",
      version: "0.1.0",
    },
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use("/swagger-ui", swaggerUi.serve, swaggerUi.setup(specs));

app.get("/swagger-ui.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(specs);
});

app.get("/", (req, res) => {
  res.send("Hello !!");
});

app.listen(8888, () => {
  console.log("The server is listening on port 8888.");
});
