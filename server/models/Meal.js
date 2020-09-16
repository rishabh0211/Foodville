const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const MealSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Meal name is required"]
    },
    price: Number,
    description: {
      type: String,
      maxlength: 150
    },
    restaurantId: { type: ObjectId, ref: "Restaurant" },
    deletedAt: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Meal", MealSchema);