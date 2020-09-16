const mongoose = require("mongoose");
const Restaurant = mongoose.model("Restaurant");

exports.createRestaurant = async (req, res, next) => {
  req.body.owner = req.user._id;
  const restaurant = await new Restaurant(req.body).save();
  return res.json(restaurant);
};
