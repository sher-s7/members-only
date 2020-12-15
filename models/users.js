const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  member: { type: Boolean, required: true, default: false },
  admin: { type: Boolean, required: true, default: false },
});

//Export model
module.exports = mongoose.model("User", UserSchema);
