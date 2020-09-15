const express = require("express");
const router = express.Router();

const catchErrors = fn => {
  return function (req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

router.get("/", (req, res) => {
  res.send({ message: "hello" });
});

module.exports = router;