const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  ImageURL: { type: String },
  Category: { type: String, required: true },
  ShortDescription: { type: String, required: true },
  Content: { type: String, required: true },
  SourceLink: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Article", articleSchema);
