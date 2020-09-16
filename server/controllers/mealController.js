const mongoose = require("mongoose");
const Meal = mongoose.model("Meal");

exports.createMeal = async (req, res, next) => {
  // req.body will contain name, description, price, restaurantId
  req.body.price = +req.body.price;
  const meal = await new Meal(req.body).save();
  res.json(meal);
};

exports.getMealById = async (req, res, next) => {
  const { mealId } = req.params;
  const meal = await Meal.findOne({ _id: mealId });
  req.meal = meal;
  next();
};

exports.getMeal = async (req, res, next) => {
  res.send(req.meal);
};