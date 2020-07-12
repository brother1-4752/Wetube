const express = require("express");
const app = express();

const PORT = 4000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
  console.log(req);
  res.send("Hello form home");
}

app.get("/", handleHome);

app.listen(PORT, handleListening);
