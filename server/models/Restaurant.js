const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const RestaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 40,
      required: [true, "Restaurant name is required"],
      trim: true
    },
    description: {
      type: String,
      minlength: 10,
      maxlength: 200,
      required: [true, "Restaurant description is required"],
      trim: true
    },
    owner: { type: ObjectId, ref: "User" },
    meals: [{ type: ObjectId, ref: "Meal" }],
    deletedAt: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Restaurant", RestaurantSchema);