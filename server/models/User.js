const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: 2,
      maxlength: 30,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      validate(value) {
        if (value.length < 7) {
          throw new Error('Password length should be greater than 6!');
        }
        if (value.toLowerCase().includes('password')) {
          throw new Error('Password should not contain the word password in it!');
        }
      }
    },
    isRestaurantOwner: Boolean,
    blockedUsers: [{ type: ObjectId, ref: "User" }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);