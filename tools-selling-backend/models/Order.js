const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const orderSchema = new Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    orderAddress: {
      type: mongoose.Types.ObjectId,
      ref: "orderAddress",
    },
    tools: [
      {
        type: mongoose.Types.ObjectId,
        ref: "tool",
      },
    ],
    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("order", orderSchema);
