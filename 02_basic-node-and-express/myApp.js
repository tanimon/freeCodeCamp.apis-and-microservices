var express = require("express");
var app = express();

const assetsPath = __dirname + "/public";
app.use("/public", express.static(assetsPath));

app.get("/", (req, res) => {
  const filePath = __dirname + "/views/index.html";
  res.sendFile(filePath);
});

app.get("/json", (req, res) => {
  res.json({ message: "Hello json" });
});

module.exports = app;
