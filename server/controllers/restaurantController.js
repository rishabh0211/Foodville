const mongoose = require("mongoose");
const Restaurant = mongoose.model("Restaurant");

exports.createRestaurant = async (req, res, next) => {
  req.body.owner = req.user._id;
  const restaurant = await new Restaurant(req.body).save();
  return res.json(restaurant);
};

exports.getRestaurantById = async (req, res, next) => {
  const { restaurantId } = req.params;
  const restaurant = await Restaurant.findOne({ _id: restaurantId, deletedAt: { "$exists": false } })
    .populate('owner', ['_id', 'name', 'email', 'type', 'blockedUsers']);
  if (!restaurant) {
    throw Error("No restaurant found for the given id");
  }

  req.restaurant = restaurant;
  next();
};

exports.getRestaurant = async (req, res, next) => {
  res.send(req.restaurant);
};

exports.updateRestaurant = async (req, res, next) => {
  req.body.updatedAt = new Date().toISOString();
  const updatedRestaurant = await Restaurant.findOneAndUpdate(
    { _id: req.restaurant._id },
    { $set: req.body },
    { new: true, runValidators: true }
  );
  res.json(updatedRestaurant);
};

exports.deleteRestaurant = async (req, res, next) => {
  const deletedRestaurant = await Restaurant.findOneAndUpdate(
    { _id: req.restaurant._id },
    { deletedAt: new Date().toISOString() },
    { new: true }
  );
  return res.json(deletedRestaurant);
};