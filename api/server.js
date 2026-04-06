const express = require("express");
const { exist } = require("../core/existence");
const { recall } = require("../void/memory");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Something changed him—undefined."
  });
});

app.get("/exist", (req, res) => {
  res.json(exist());
});

app.get("/memory", (req, res) => {
  res.json(recall());
});

app.listen(PORT, () => {
  console.log(`Wazy is listening on port ${PORT}... or maybe not.`);
});
