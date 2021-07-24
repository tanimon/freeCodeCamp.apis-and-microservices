var express = require("express");
var app = express();

const assetsPath = __dirname + "/public";
app.use("/public", express.static(assetsPath));

app.get("/", (req, res) => {
  const filePath = __dirname + "/views/index.html";
  res.sendFile(filePath);
});

module.exports = app;
