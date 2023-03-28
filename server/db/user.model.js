const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  userName: String,
  password: String,
  favorites: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "cards",
    default: [""],
  },
});

module.exports = mongoose.model("User", UserSchema);
