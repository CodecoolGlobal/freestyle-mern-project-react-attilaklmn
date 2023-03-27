/*
Loading the .env file and creates environment variables from it
*/
require("dotenv").config();
const mongoose = require("mongoose");
const CardModel = require("../db/card.model");

const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1); // exit the current program
}

const handleFetch = async (i) => {
  let url = `https://us.api.blizzard.com/hearthstone/cards?locale=en_US&page=${i}pageSize=500&access_token=EUeqdlUwbWgpLWAMMNFsz7nNdyDVt4mqcx`;

  const promise = await fetch(url);
  const data = await promise.json();
  return data.cards;
};

const populateCards = async () => {
  await CardModel.deleteMany({});
  const allCards = [];
  for (let i = 1; i < 117; i++) {
    const fetchedCards = await handleFetch(i);
    console.log(i);
    allCards.push(...fetchedCards);
  }

  const cards = allCards.map((card) => ({
    artistName: card.artistName,
    attack: card.attack,
    cardSetId: card.cardSetId,
    cardTypeId: card.cardTypeId,
    childIds: card.childIds,
    classId: card.classId,
    collectible: card.collectible,
    cropImage: card.cropImage,
    flavorText: card.flavorText,
    health: card.health,
    id: card.id,
    image: card.image,
    imageGold: card.imageGold,
    manaCost: card.manaCost,
    minionTypeId: card.minionTypeId,
    multiClassIds: card.multiClassIds,
    name: card.name,
    parentId: card.parentId,
    rarityId: card.rarityId,
    slug: card.slug,
    text: card.text,
  }));

  await CardModel.create(...cards);
  console.log("Cards created");
};

const main = async () => {
  await mongoose.connect(mongoUrl);

  await populateCards();

  await mongoose.disconnect();
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
