const express = require("express");
const app = require("express")();
const bodyParser = require("body-parser");
const logger = require("morgan");
const database = require("./redis");
const path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(logger("dev"));

const port = process.env.PORT || 3000;

app.use("/v1", database);
app.listen(port, (err, reply) => {
  if (err) console.log(err);
  console.log("Server started");
});
