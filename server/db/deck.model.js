const mongoose = require("mongoose");
const { Schema } = mongoose;

const DeckSchema = new Schema({
  name: String,
  class: Number,
  cards: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Card",
    default: [],
  },
});

module.exports = mongoose.model("Deck", DeckSchema);
