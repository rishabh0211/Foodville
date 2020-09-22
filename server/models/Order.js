const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const OrderSchema = new mongoose.Schema(
  {
    meals: [{
      _id: ObjectId,
      name: String,
      price: Number,
      quantity: Number
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
    restaurant: { type: ObjectId, ref: "Restaurant" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);