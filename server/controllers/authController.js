const mongoose = require("mongoose");
const User = mongoose.model("User");
const passport = require("passport");
const { check, validationResult } = require("express-validator");

exports.validateSignupRules = () => {
  return [
    check("email", "Enter a valid email").isEmail().normalizeEmail(),
    check("password", "Enter a Password").notEmpty(),
    check("password", "Password must be atleast 6 characters long").isLength({ min: 6 })
  ];
};

exports.validateSignup = (req, res, next) => {
  const errors = validationResult(req);
  console.log("errors============== ", errors);
  if (errors.isEmpty()) {
    return next();
  }
  const firstError = errors.errors.map(error => error.msg)[0];
  return res.status(400).send({ messgage: firstError });
};

exports.signup = async (req, res, next) => {
  const { name, email, password, type = "customer" } = req.body;
  const user = await new User({ name, email, password, type });
  await user.save();
  res.status(201).send(user);
};
