const mongoose = require("mongoose");

const citySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    country: {
      type: String,
      required: true,
    },

    lat: {
      type: Number,
    },

    lon: {
      type: Number,
    },

    createdAt: {
      type: Date,
    },
  }
);

module.exports = mongoose.model("City", citySchema);
