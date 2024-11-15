const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  brand: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    default: 0,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  countInStock: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Number,
    default: 5,
  },
  numReviews: {
    type: Number,
    default: 0,
  },
  isFeature: {
    type: Boolean,
    default: 0,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});
productSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

productSchema.set("toJSON", {
  virtuals: true,
});
exports.Product = mongoose.modelNames("Product", productSchema);
module.exports = mongoose.model("Product", productSchema);
