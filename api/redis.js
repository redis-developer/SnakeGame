const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const { update, create, validate, getCount } = require("./controllers");
const {
  validations,
  validationsUpdate,
  validateUsername,
} = require("./middleware");

router.get("/count", validateUsername, getCount);

router.post("/validate", validations, validate);

router.post("/create", validations, create);

router.put("/update", validationsUpdate, update);

module.exports = router;
