const bodyParser = require("body-parser");

require("dotenv").config();

var express = require("express");
var app = express();

app.use((req, res, next) => {
  const method = req.method;
  const path = req.path;
  const ip = req.ip;
  console.log(`${method} ${path} - ${ip}`);
  next();
}, bodyParser.urlencoded({ extended: false }));

const assetsPath = __dirname + "/public";
app.use("/public", express.static(assetsPath));

app.get("/", (req, res) => {
  const filePath = __dirname + "/views/index.html";
  res.sendFile(filePath);
});

app.get("/json", (req, res) => {
  const messageStyle = process.env.MESSAGE_STYLE;
  const rowMessage = "Hello json";
  const message =
    messageStyle === "uppercase" ? rowMessage.toUpperCase() : rowMessage;

  res.json({ message: message });
});

app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.json({ time: req.time });
  }
);

app.get("/:word/echo", (req, res) => {
  const word = req.params.word;
  res.json({ echo: word });
});

app.get("/name", (req, res) => {
  const firstName = req.query.first;
  const lastName = req.query.last;
  res.json({ name: `${firstName} ${lastName}` });
});

module.exports = app;
