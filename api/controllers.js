const { check, validationResult } = require("express-validator");
const redis = require("redis");
const chalk = require("chalk");
const client = redis.createClient();

client.on("connect", () => {
  console.log("Redis server connected");
});

const update = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const { username, count } = req.body;
  client.hmset(`${username}`, ["count", count], (err, reply) => {
    if (err) {
      console.log(chalk.red(err));
    }
    console.log(chalk.blue(reply));
    res.status(200).send("success");
  });
};

const create = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const { username, password } = req.body;
  client.hmset(
    `${username}`,
    ["password", password, "count", 0],
    (err, reply) => {
      if (err) {
        console.log(chalk.red(err));
      }
      console.log(reply);
      res.status(200).send("success");
    }
  );
};

const validate = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(403).send({ errors: errors.array() });
  }

  const { username, password } = req.body;
  client.hgetall(username, (err, result) => {
    if (err) {
      console.log(chalk.red(err));
    }
    if (result.password === req.body.password)
      res.status(200).send({ response: result });
    else res.status(403).send({ response: "authError" });
  });
};

const getCount = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(403).send({ errors: errors.array() });
  }
  const { username } = req.body;
  client.hgetall(username, (err, result) => {
    if (err) {
      console.log(chalk.red(err));
    }
    console.log(chalk.blue(result.count));
    res.status(200).send({ response: result.count });
  });
};

module.exports = {
  update,
  create,
  validate,
  getCount,
};
