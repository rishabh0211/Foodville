const mongoose = require("mongoose");
const Order = mongoose.model("Order");
const Meal = mongoose.model("Meal");
const { orderStatuses, userTypes } = require('../constants');

exports.createOrder = async (req, res, next) => {
  const { restaurantId, meals } = req.body;
  const userId = req.user._id;
  const orderObj = {
    restaurant: restaurantId,
    user: userId,
    statuses: [{ status: orderStatuses.PLACED, date: new Date().toISOString() }]
  };
  const restaurantMeals = await Meal.find({ restaurantId });
  addMealsAndTotalAmount(orderObj, meals, restaurantMeals);
  const order = await new Order(orderObj).save();
  res.status(201).send(order);
};

exports.updateStatus = async (req, res, next) => {
  const { orderId } = req.params;
  const { status } = req.body;
  const data = {
    status,
    date: new Date().toISOString()
  };
  const order = await Order.findOneAndUpdate(
    { _id: orderId },
    { $push: { statuses: data } },
    { new: true }
  );
  res.send(order);
};

exports.getAllOrders = async (req, res, next) => {
  const idField = req.user.type === userTypes.CUSTOMER ? "user" : "restaurant";
  const orders = await Order.find({ [idField]: req.user._id });
  res.send(orders);
};

const addMealsAndTotalAmount = (order, reqMeals, restaurantMeals) => {
  let mealMap = {};
  let totalAmount = 0;
  for (let i = 0; i < restaurantMeals.length; i++) {
    mealMap[restaurantMeals[i]._id] = restaurantMeals[i];
  }
  const resMeals = reqMeals.map(meal => {
    const dbMeal = mealMap[meal._id];
    if (!dbMeal) {
      throw Error(`Invalid meal id ${meal._id}`);
    }
    totalAmount += dbMeal.price * meal.quantity;
    return {
      _id: dbMeal._id,
      name: dbMeal.name,
      price: dbMeal.price,
      quantity: meal.quantity
    };
  });
  order.totalAmount = totalAmount;
  order.meals = resMeals;
};