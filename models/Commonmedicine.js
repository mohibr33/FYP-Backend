const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  title: { type: String, required: true },
  imageUrl: { type: String },
  usage: { type: String, required: true },
  sideEffects: { type: String, required: true },
category:{ type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("CommonMedicine", medicineSchema);