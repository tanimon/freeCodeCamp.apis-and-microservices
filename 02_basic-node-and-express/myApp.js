require("dotenv").config();

var express = require("express");
var app = express();

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

module.exports = app;
