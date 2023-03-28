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

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const createNewCard = async (card) => {
  try {
    const saved = await CardModel.create(card);
    return res.json(saved);
  } catch (err) {
    return next(err);
  }
};

app.get("/api/cards/", async (req, res) => {
  const cards = await CardModel.find();
  return res.json(cards);
});

app.get("/api/cards/filter/", async (req, res) => {
  let modelToFind = {};
  let sortBy = "name";
  let sortOrder = "asc";
  for (const property in req.query) {
    if (property === "sort") {
      sortBy = req.query[property];
    } else if (property === "sortOrder") {
      sortOrder = req.query[property];
    } else {
      if (isNaN(req.query[property])) {
        modelToFind[property] = new RegExp(req.query[property], "i");
      } else {
        modelToFind[property] = req.query[property];
      }
    }
  }
  let sortObject = {};
  sortObject[sortBy] = sortOrder;
  const cards = await CardModel.find(modelToFind).sort(sortObject);
  return res.json(cards);
});

app.post("/api/cards/", (req, res, next) => {
  const cards = req.body;

  cards.forEach((card) => {
    createNewCard(card);
  });
});

const main = async () => {
  await mongoose.connect(MONGO_URL);
  app.listen(PORT, () => {
    console.log("App is listening on 8080");
    console.log("Try /api/cards route right now");
  });
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
