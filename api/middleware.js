const { check, validationResult } = require("express-validator");

const validations = [
  check("username").isString(),
  check("password").isString().isLength({ min: 5 }),
];

const validationsUpdate = [
  check("username").isString(),

  check("count").isNumeric(),
];

const validateUsername = [check("username").isString()];
module.exports = {
  validations,
  validationsUpdate,
  validateUsername,
};
