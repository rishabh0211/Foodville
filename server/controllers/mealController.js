const mongoose = require("mongoose");
const Meal = mongoose.model("Meal");

exports.createMeal = async (req, res, next) => {
  // req.body will contain name, description, price, restaurantId
  req.body.price = +req.body.price;
  const meal = await new Meal(req.body).save();
  res.json(meal);
};