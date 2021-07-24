var express = require("express");
var app = express();

app.get("/", (req, res) => {
  const filePath = __dirname + "/views/index.html";
  res.sendFile(filePath);
});

module.exports = app;
