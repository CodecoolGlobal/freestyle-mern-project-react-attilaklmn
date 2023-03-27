const mongoose = require("mongoose");
const { Schema } = mongoose;

const CardSchema = new Schema({
  artistName: String,
  attack: Number,
  cardSetId: Number,
  cardTypeId: Number,
  childIds: Array,
  classId: Number,
  collectible: Number,
  cropImage: String,
  flavorText: String,
  health: Number,
  id: Number,
  image: String,
  imageGold: String,
  manaCost: Number,
  minionTypeId: Number,
  multiClassIds: Array,
  name: String,
  parentId: Number,
  rarityId: Number,
  slug: String,
  text: String,
});

module.exports = mongoose.model("Card", CardSchema);
