const mongoose = require("mongoose");
const Meal = mongoose.model("Meal");

exports.createMeal = async (req, res, next) => {
  // req.body will contain name, description, price, restaurantId
  req.body.price = +req.body.price;
  req.body.ownerId = req.user._id;
  const meal = await new Meal(req.body).save();
  res.status(201).json(meal);
};

exports.getMealById = async (req, res, next) => {
  const { mealId } = req.params;
  const meal = await Meal.findOne({ _id: mealId, deletedAt: { $exists: false } });
  if (!meal) {
    throw Error(`Cannot find a meal by the given id ${mealId}`);
  }
  req.meal = meal;
  next();
};

exports.getMeal = async (req, res, next) => {
  if (!req.meal) {
    throw Error(`Cannot find a meal by the given id ${mealId}`);
  }
  res.send(req.meal);
};

exports.updateMeal = async (req, res, next) => {
  const { name, description, price } = req.body;
  // const ownerId = mongoose.Types.ObjectId(userId);
  // if (!ownerId.equals(req.user._id)) {
  //   throw Error('You are not authorized to perform this action');
  // }
  const meal = await Meal.findOneAndUpdate(
    { _id: req.meal._id, ownerId: req.user._id, deletedAt: { $exists: false } },
    { $set: { name, description, price } },
    { new: true, runValidators: true }
  );
  if (!meal) {
    return res.status(401).send({ message: "You are not authorized to perform this action" });
  }
  res.json(meal);
};

exports.deleteMeal = async (req, res, next) => {
  const meal = await Meal.findOneAndUpdate(
    { _id: req.meal._id, ownerId: req.user._id },
    { $set: { deletedAt: new Date().toISOString() } },
    { new: true }
  );
  if (!meal) {
    return res.status(401).send({ message: "You are not authorized to perform this action" });
  }
  res.json(meal);
};