const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const orderAddress = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
    },
    rc: {
      type: String,
      required: true,
      trim: true,
    },
    purpose: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("orderAddress", orderAddress);
