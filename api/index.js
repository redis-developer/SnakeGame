const app = require("express")();
const bodyParser = require("body-parser");
const logger = require("morgan");
const database = require(./redis);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(logger("dev"));

const port = process.env.PORT || 3000;
app.listen(port, (err, reply) => {
  if (err) console.log(err);
  console.log("Server started");
});
