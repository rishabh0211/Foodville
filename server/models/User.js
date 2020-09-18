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
    type: String,
    isRestaurantOwner: Boolean,
    // restaurants: [{ type: ObjectId, ref: "Restaurant" }]
  },
  { timestamps: true }
);

const autoPopulateReviewUsers = function (next) {
  this.populate("blockedUsers", "_id name email");
  next();
};
userSchema.pre("findOne", autoPopulateReviewUsers);

// delete password property from the user object
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  if (userObject.type !== "restaurant") {
    delete userObject.blockedUsers;
  }
  delete userObject.password;
  return userObject;
};

// Hash the plain text password before saving
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

// setting correct message corresponding to error
userSchema.post("save", function (error, doc, next) {
  if (error.name === 'MongoError' && error.code === 11000) {
    next(new Error('Email must be unique'));
  } else {
    next(error);
  }
});

module.exports = mongoose.model("User", userSchema);