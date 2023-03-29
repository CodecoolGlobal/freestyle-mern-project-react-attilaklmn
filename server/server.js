require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const CardModel = require("./db/card.model");
const UserModel = require("./db/user.model");

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

app.get("/api/users/", async (req, res) => {
  const users = await UserModel.find().populate({
    path: "favorites",
    model: "Card",
  });
  return res.json(users);
});

app.get("/api/users/:id", async (req, res) => {
  const user = await UserModel.findById(req.params.id);
  return res.json(user);
});

app.post("/api/users/register/", async (req, res, next) => {
  const { userName, password } = req.body;
  const checkIfUserExists = await UserModel.findOne({ userName: userName });
  if (checkIfUserExists) {
    return res
      .status(400)
      .json(`${userName} was taken! Please choose different username!`);
  } else {
    try {
      const saved = await UserModel.create({ userName, password });
      return res.status(200).json(`${userName} registered!`);
    } catch (err) {
      return next(err);
    }
  }
});

app.post("/api/users/login/", async (req, res, next) => {
  const { userName, password } = req.body;
  const userStored = await UserModel.findOne({ userName: userName });
  if (userStored) {
    if (password === userStored.password) {
      return res.status(200).json({ message: "ok", userId: userStored._id });
    } else {
      return res.status(400).json("Wrong Password!");
    }
  } else res.status(400).json("Wrong Username!");
});

app.patch("/api/users/:id", async (req, res, next) => {
  try {
    const { cardId } = req.body;
    const userToUpdate = await UserModel.findById(req.params.id);
    if (!userToUpdate.favorites.includes(cardId)) {
      userToUpdate.favorites.push(cardId);
    } else {
      userToUpdate.favorites.splice(userToUpdate.favorites.indexOf(cardId), 1);
    }
    const user = await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      { $set: userToUpdate },
      { new: true }
    );
    return res.status(200).json(user);
  } catch (err) {
    return next(err);
  }
});

app.delete("/api/users/:id", async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params.id);
    const deleted = await user.delete();
    return res.json(deleted);
  } catch (err) {
    return next(err);
  }
});

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
