const express = require("express");
const router = express.Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const restaurantController = require('../controllers/restaurantController');
const mealController = require('../controllers/mealController');
const orderController = require('../controllers/orderController');

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
    catchErrors(restaurantController.deleteRestaurant)
  );
// get all owned restaurants
router.get('/api/restaurants', catchErrors(restaurantController.getAllRestaurants));

/**
 * RESTAURANT ROUTES: /api/meal/:mealId
 */

router.param("mealId", catchErrors(mealController.getMealById));
// create meal in restaurant
router.post(
  "/api/meal",
  authController.checkIsRestaurant,
  catchErrors(mealController.createMeal)
);
router.route("/api/meal/:mealId")
  // read meals in restaurant
  .get(catchErrors(mealController.getMeal))
  // update meal in restaurant
  .post(catchErrors(mealController.updateMeal))
  // delete meal in restaurant
  .delete(catchErrors(mealController.deleteMeal));

// Update Order status
// Get order history


/** ORDER ROUTES */

// place/create order
router.post("/api/order", catchErrors(orderController.createOrder));

router.post("/api/order/:orderId/update", catchErrors(orderController.updateStatus));


module.exports = router;