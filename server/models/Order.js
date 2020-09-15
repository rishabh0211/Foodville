const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const OrderSchema = new mongoose.Schema(
  {
    meals: [{
      quantity: Number,
      meal: { type: ObjectId, ref: "Meal" }
    }],
    statuses: [{
      status: String,
      date: Date
    }],
    totalAmount: {
      type: Number,
      required: true
    },
    user: { type: ObjectId, ref: "User" },
    restaurant: { type: ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default mongoose.model("Order", OrderSchema);