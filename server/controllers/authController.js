const mongoose = require("mongoose");
const User = mongoose.model("User");
const passport = require("passport");
const { check, validationResult } = require("express-validator");
const { userTypes } = require('../constants');

// body validate using express validator
exports.validateSignupRules = () => {
  return [
    check("email", "Enter a valid email").isEmail().normalizeEmail(),
    check("password", "Enter a Password").notEmpty(),
    check("password", "Password must be atleast 6 characters long").isLength({ min: 6 })
  ];
};

// check for express validator errors
exports.validateSignup = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const firstError = errors.errors.map(error => error.msg)[0];
  return res.status(400).send({ messgage: firstError });
};

// signup handler
exports.signup = async (req, res, next) => {
  const { name, email, password, type = userTypes.CUSTOMER } = req.body;
  if (type !== userTypes.CUSTOMER && type !== userTypes.RESTAURANT) {
    throw Error('Enter a valid user type');
  }
  const user = await new User({ name, email, password, type });
  await user.save();
  res.status(201).send(user);
};

// signin handler
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

// signout hanlder
exports.signOut = async (req, res, next) => {
  res.clearCookie("employee-feedback.sid");
  req.logout();
  res.json({ message: "You are now signed out" });
};

// checks if it the user is of type restaurant
exports.checkIsRestaurant = (req, res, next) => {
  if (!req.user || req.user.type !== userTypes.RESTAURANT) {
    return res.status(401).send({ message: "You are not authorized to perform this action" });
  }
  next();
};

// checks if the current restaurant is the authorized one or not
exports.checkIsAuthRestaurant = (req, res, next) => {
  const restaurantId = mongoose.Types.ObjectId(req.restaurant.owner._id);
  if (req.user && restaurantId.equals(req.user._id)) {
    return next();
  }
  return res.status(403).send({ message: "You are not allowed to perform this action" });
};