const mongoose = require("mongoose");
const Order = mongoose.model("Order");
const Meal = mongoose.model("Meal");
const Restaurant = mongoose.model("Restaurant");
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
  ).populate('restaurant', ['_id', 'name', 'email'])
    .populate('user', ['_id', 'name', 'email']);
  res.send(order);
};

exports.getAllOrders = async (req, res, next) => {
  if (req.user.type === userTypes.CUSTOMER) {
    const orders = await Order.find({ user: req.user._id })
      .populate('restaurant', ['_id', 'name', 'email', 'blockedUsers'])
      .populate('user', ['_id', 'name', 'email']);
    return res.send(orders);
  }
  const restaurants = await Restaurant.find({ owner: req.user._id, deletedAt: { $exists: false } })
    .select('_id');
  const restaurantIds = restaurants.map(restaurant => restaurant._id);
  const orders = await Order.find({ restaurant: { $in: restaurantIds } })
    .populate('restaurant', ['_id', 'name', 'email', 'blockedUsers'])
    .populate('user', ['_id', 'name', 'email']);
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