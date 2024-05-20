const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      min: 6,
      max: 20,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("user", userSchema);
