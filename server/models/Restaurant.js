const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const Meal = mongoose.model("Meal");

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 40,
      required: [true, "Restaurant name is required"],
      trim: true,
      unique: true
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
    blockedUsers: [{ type: ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Restaurant", restaurantSchema);