require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const CardModel = require("./db/card.model");

const { MONGO_URL, PORT = 8080 } = process.env;

if (!MONGO_URL) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1);
}

const app = express();
app.use(express.json());

app.get("api/cards/", async (req, res) => {
  const cards = await CardModel.find();
  return res.json(cards);
});

const createNewCard = async (card) => {
  try {
    const saved = await CardModel.create(card);
    return res.json(saved);
  } catch (err) {
    return next(err);
  }
};

app.post("api/cards", (req, res, next) => {
  const cards = req.body;

  cards.forEach((card) => {
    createNewCard(card);
  });
});

const main = async () => {
  await mongoose.connect(MONGO_URL);
  app.listen(PORT, () => {
    console.log("App is listening on 8080");
    console.log("Try /api/employees route right now");
  });
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
