const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  email:     { type: String, required: true, unique: true },
  password:  { type: String }, // not required if Google signup
  gender:    { type: String, enum: ["Male", "Female", "Other"], required: true },
  phone:     { type: String, required: true },
  isVerified:{ type: Boolean, default: false },
  otp:       { type: String },
  otpExpiry: { type: Date },
  googleId:  { type: String }, // for Google signup
  resetToken:{ type:String },
  resetTokenExpiry:{ type:Date },
  //change 
  role: { type: String, enum: ["user", "admin"] },

});

module.exports = mongoose.model("User", userSchema);
