const express = require("express");
const router = express.Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

/* Error handler for async / await functions */
const catchErrors = fn => {
  return function (req, res, next) {
    return fn(req, res, next).catch(err => {
      const error = err.message ? { message: err.message } : err;
      res.status(404).send(error);
    });
  };
};

/** AUTH ROUTES */
router.post(
  "/api/auth/signup",
  authController.validateSignupRules(),
  authController.validateSignup,
  catchErrors(authController.signup)
);
router.post("/api/auth/signin", authController.signin);
router.get("/api/auth/signout", authController.signOut);

module.exports = router;