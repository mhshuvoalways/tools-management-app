const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const toolSchema = new Schema(
  {
    category: {
      type: mongoose.Types.ObjectId,
      ref: "category",
    },
    image: {
      url: String,
      public_id: String,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    slug: String,
    description: {
      type: String,
      trim: true,
      required: true,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = model("tool", toolSchema);

module.exports = Product;
