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
 * AUTH ROUTES: /auth
 */
router.post(
  "/auth/signup",
  authController.validateSignupRules(),
  authController.validateSignup,
  catchErrors(authController.signup)
);
// signin
router.post("/auth/signin", authController.signin);
router.get("/auth/checkLogin", authController.checkLogin);
// signout
router.get("/auth/signout", authController.signOut);

// Get All Restaurants (exclude blocked)
// Place Order
// Get order history
// Update Order status

/** 
 * RESTAURANT OWNER ROUTES: /restaurant
 */
router.param("restaurantId", catchErrors(restaurantController.getRestaurantById));
// create restaurant
router.post(
  "/restaurant",
  authController.checkIsRestaurant,
  catchErrors(restaurantController.createRestaurant)
);
router.get("/restaurant/:restaurantId/block/:userId", catchErrors(restaurantController.blockUser));
router.
  route("/restaurant/:restaurantId")
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

// router.get('/restaurants/all', catchErrors(restaurantController.getAllRestaurants));
// get all owned restaurants
// get all restaurants
router.get('/restaurants', catchErrors(restaurantController.getAllRestaurants));

/**
 * RESTAURANT ROUTES: /meal/:mealId
 */

router.param("mealId", catchErrors(mealController.getMealById));
// create meal in restaurant
router.post(
  "/meal",
  authController.checkIsRestaurant,
  catchErrors(mealController.createMeal)
);
router.route("/meal/:mealId")
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
router.post("/order", catchErrors(orderController.createOrder));

router.get("/orders", catchErrors(orderController.getAllOrders));
router.post("/order/:orderId/update", catchErrors(orderController.updateStatus));


module.exports = router;