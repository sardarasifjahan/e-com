const mongoose = require("mongoose");
const categorySchame = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    categoryImage: {
      type: String,
    },
    slug: { type: String, required: true, trim: true },
    parentId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Category", categorySchame);
