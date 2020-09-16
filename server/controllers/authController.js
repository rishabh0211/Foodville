const mongoose = require("mongoose");
const User = mongoose.model("User");
const passport = require("passport");
const { check, validationResult } = require("express-validator");
const { userTypes } = require('../constants');

exports.validateSignupRules = () => {
  return [
    check("email", "Enter a valid email").isEmail().normalizeEmail(),
    check("password", "Enter a Password").notEmpty(),
    check("password", "Password must be atleast 6 characters long").isLength({ min: 6 })
  ];
};

exports.validateSignup = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const firstError = errors.errors.map(error => error.msg)[0];
  return res.status(400).send({ messgage: firstError });
};

exports.signup = async (req, res, next) => {
  const { name, email, password, type = userTypes.CUSTOMER } = req.body;
  if (type !== userTypes.CUSTOMER && type !== userTypes.RESTAURANT) {
    throw Error('Enter a valid user type');
  }
  const user = await new User({ name, email, password, type });
  await user.save();
  res.status(201).send(user);
};

exports.signin = async (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    if (!user) {
      return res.status(400).json({ message: info.message });
    }
    req.logIn(user, err => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.json(user);
    });
  })(req, res, next);
};

exports.checkRestaurantAuth = (req, res, next) => {
  if (!req.user || req.user.type !== userTypes.RESTAURANT) {
    return res.status(401).send({ message: "You are not authorized to perform this action" });
  }
  next();
};