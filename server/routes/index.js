const express = require("express");
const router = express.Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const restaurantController = require('../controllers/restaurantController');
const mealController = require('../controllers/mealController');

/* Error handler for async / await functions */
const catchErrors = fn => {
  return function (req, res, next) {
    return fn(req, res, next).catch(err => {
      const error = err.message ? { message: err.message } : err;
      res.status(400).send(error);
    });
  };
};

/**
 * AUTH ROUTES: /api/auth
 */
router.post(
  "/api/auth/signup",
  authController.validateSignupRules(),
  authController.validateSignup,
  catchErrors(authController.signup)
);
// signin
router.post("/api/auth/signin", authController.signin);
// signout
router.get("/api/auth/signout", authController.signOut);


/**
 * USER ROUTES: /api/users
 */
//
router.param("userId", catchErrors(userController.getUserById));

// Get All Restaurants (exclude blocked)
// Place Order
// Get order history
// Update Order status

/** 
 * RESTAURANT OWNER ROUTES: /api/restaurant
 */
router.param("restaurantId", catchErrors(restaurantController.getRestaurantById));
// create restaurant
router.post(
  "/api/restaurant",
  authController.checkIsRestaurant,
  catchErrors(restaurantController.createRestaurant)
);
router.
  route("/api/restaurant/:restaurantId")
  // read restaurant
  .get(catchErrors(restaurantController.getRestaurant))
  // update restaurant
  .post(
    authController.checkIsAuthRestaurant,
    catchErrors(restaurantController.updateRestaurant)
  )
  // delete restaurant
  .delete(
    authController.checkIsAuthRestaurant,
    restaurantController.deleteRestaurant
  );
// get all owned restaurants
  router.get('/api/restaurants', restaurantController.getAllRestaurants);

/**
 * RESTAURANT ROUTES: /api/meal/:mealId
 */
// create meal in restaurant
router.post(
  "/api/meal",
  authController.checkIsRestaurant,
  catchErrors(mealController.createMeal)
);
// read meals in restaurant
// update meal in restaurant
// delete meal in restaurant

// Update Order status
// Get order history

module.exports = router;