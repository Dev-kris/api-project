const express = require("express");
const app = express();

app.use((req, res) => {
  res.json({ message: "your request was successful." });
});

//export app to allow access in other files
module.exports = app;
