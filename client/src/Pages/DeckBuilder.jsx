import { useEffect, useState, useMemo, Fragment } from "react";
import "./DeckBuilder.css";
import Card from "../Components/Card";
import Pagination from "../Components/Card/Pagination";
import Filter from "../Components/Card/Filter";
import ClassPicker from "../Components/ClassPicker";
import DeckPicker from "../Components/DeckPicker";
import CroppedCards from "../Components/CroppedCards";
import ManaBox from "../Components/ManaBox";
import DeckData from "../Components/DeckData";

let PageSize = 20;

const fetchCurrentUser = (userId) => {
  return fetch(`http://localhost:8080/api/users/${userId}`).then((res) =>
    res.json()
  );
};

const fetchDeckFromApi = (deckString) => {
  console.log(deckString);
  return fetch(
    `https://us.api.blizzard.com/hearthstone/deck?locale=en_US&code=${deckString}&access_token=EU9uSYfLffOSOuamuA03RnlURraW90JViT`
  ).then((res) => {
    if (res.status === 200) {
      return res.json();
    } else return "shit";
  });
};

const saveNewDeck = (deckSchema) => {
  return fetch(`http://localhost:8080/api/decks/new/`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(deckSchema),
  }).then((res) => res.json());
};

const addDeckToUser = (userId, deck) => {
  return fetch(`http://localhost:8080/api/users/decks/${userId}`, {
    method: "PATCH",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ deckId: deck._id }),
  }).then((res) => res.json());
};

const updateDeck = (deckSchema, deckId) => {
  return fetch(`http://localhost:8080/api/decks/${deckId}`, {
    method: "PATCH",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ deck: deckSchema }),
  }).then((res) => res.json());
};

const fetchDeckWithCards = (deckId) => {
  return fetch(`http://localhost:8080/api/decks/${deckId}`).then((res) =>
    res.json()
  );
};

const DeckBuilder = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cardList, setCardList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [isClassPicked, setIsClassPicked] = useState(false);
  const [isDeckPicked, setIsDeckPicked] = useState(false);
  const [currentDeckCards, setCurrentDeckCards] = useState([]);
  const [deckName, setDeckName] = useState("");

  const [deckString, setDeckString] = useState("");

  const [mana0Height, setMana0Height] = useState(0);
  const [mana1Height, setMana1Height] = useState(0);
  const [mana2Height, setMana2Height] = useState(0);
  const [mana3Height, setMana3Height] = useState(0);
  const [mana4Height, setMana4Height] = useState(0);
  const [mana5Height, setMana5Height] = useState(0);
  const [mana6Height, setMana6Height] = useState(0);
  const [mana7Height, setMana7Height] = useState(0);

  const fetchCardList = () => {
    setIsLoading(true);
    return fetch("http://localhost:8080/api/cards")
      .then((res) => res.json())
      .then((cards) => {
        return cards.filter((card) => {
          if (card.collectible === 1) {
            return card;
          }
        });
      });
  };

  const findApiDeckCards = (deck) => {
    const foundCards = [];
    for (let i = 0; i < deck.cards.length; i++) {
      let current = cardList.filter((card) => card.id === deck.cards[i].id);
      foundCards.push(...current);
    }
    return foundCards;
  };

  const handleFetchDeckFromApi = () => {
    setIsLoading(true);
    fetchDeckFromApi(deckString)
      .then((deck) => {
        if (deck === "shit") {
          alert("fetch not succesful");
        } else {
          setIsClassPicked(deck.class.id);
          setIsDeckPicked("new");
          setCurrentDeckCards(findApiDeckCards(deck));
        }
      })
      .then(() => setIsLoading(false));
  };

  useEffect(() => {
    let totalMana = 0;
    let eachManaCount = [0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < currentDeckCards.length; i++) {
      totalMana += currentDeckCards[i].manaCost;
      if (currentDeckCards[i].manaCost <= 7) {
        eachManaCount[`${Number(currentDeckCards[i].manaCost)}`]++;
      } else {
        eachManaCount[7]++;
      }
    }
    setMana0Height((eachManaCount[0] / currentDeckCards.length) * 100);
    setMana1Height((eachManaCount[1] / currentDeckCards.length) * 100);
    setMana2Height((eachManaCount[2] / currentDeckCards.length) * 100);
    setMana3Height((eachManaCount[3] / currentDeckCards.length) * 100);
    setMana4Height((eachManaCount[4] / currentDeckCards.length) * 100);
    setMana5Height((eachManaCount[5] / currentDeckCards.length) * 100);
    setMana6Height((eachManaCount[6] / currentDeckCards.length) * 100);
    setMana7Height((eachManaCount[7] / currentDeckCards.length) * 100);
  }, [currentDeckCards]);

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      setIsLoading(true);
      fetchCurrentUser(localStorage.getItem("userLoggedIn")).then((user) => {
        setCurrentUser(user);
        setIsLoading(false);
      });
    }
  }, []);

  useEffect(() => {
    fetchCardList().then((cards) => {
      setCardList(cards);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (isDeckPicked !== "new" && isDeckPicked) {
      fetchDeckWithCards(isDeckPicked).then((deck) =>
        setCurrentDeckCards(deck.cards)
      );
    }
  }, [isDeckPicked]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return cardList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, isLoading, cardList]);

  const handleFilter = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const manaCost = event.target.manaCost.value;
    const attack = event.target.attack.value;
    const health = event.target.health.value;
    const type = event.target.type.value;
    const rarity = event.target.rarity.value;
    const cardClass = event.target.cardClass.value;
    const cardSetId = event.target.cardSetId.value;

    let url = "?";
    if (manaCost !== "") {
      url += `manaCost=${manaCost}&`;
    }
    if (attack !== "") {
      url += `attack=${attack}&`;
    }
    if (health !== "") {
      url += `health=${health}&`;
    }
    if (type !== "") {
      url += `cardTypeId=${type}&`;
    }
    if (rarity !== "") {
      url += `rarityId=${rarity}&`;
    }
    if (cardClass !== "") {
      url += `classId=${cardClass}&`;
    }
    if (cardSetId !== "") {
      url += `cardSetId=${cardSetId}&`;
    }
    if (name !== "") {
      url += `name=${name}&`;
    }
    setIsLoading(true);
    fetch(`http://localhost:8080/api/cards/filter/${url}`)
      .then((res) => res.json())
      .then((cards) => {
        setCardList(cards);
        setIsLoading(false);
      });
  };

  function getOccurrence(array, value) {
    return array.filter((v) => v.name === value.name).length;
  }

  const handleAddToDeck = (card) => {
    if (
      Number(card.rarityId) === 5 &&
      getOccurrence([...currentDeckCards], card) >= 1
    ) {
      alert("A legendary card can only be used once in every deck");
    } else if (getOccurrence([...currentDeckCards], card) >= 2) {
      alert("A card can only occur twice in a deck!");
    } else if (Number(isClassPicked) !== card.classId && card.classId !== 12) {
      alert("Different class set!");
    } else if (currentDeckCards.length >= 30) {
      alert("A deck should have 30 cards");
    } else setCurrentDeckCards([...currentDeckCards, card]);
  };

  const handleRemoveFromDeck = (card) => {
    let newDeck = [...currentDeckCards];
    let index = newDeck.indexOf(card);
    newDeck.splice(index, 1);
    setCurrentDeckCards(newDeck);
  };

  const handleOnDeckClick = (deck) => {
    if (deck === "new") {
      setIsDeckPicked(deck);
    } else {
      setIsDeckPicked(deck._id);
      setDeckName(deck.name);
    }
  };

  const handleSave = () => {
    let cardIds = [...currentDeckCards].map((card) => card._id);
    const deckSchema = {
      name: deckName,
      class: isClassPicked,
      cards: cardIds,
    };
    if (isDeckPicked === "new") {
      saveNewDeck(deckSchema).then((deck) => {
        addDeckToUser(currentUser._id, deck);
        setIsDeckPicked(deck._id);
        alert("Deck Saved!");
      });
    } else {
      updateDeck(deckSchema, isDeckPicked);
      alert("Deck Updated!");
    }
  };
  return (
    <div className="main">
      <div className="content">
        {isDeckPicked && (
          <Fragment>
            <Filter onFilter={handleFilter} />
            {isLoading && <div className="loading">Loading...</div>}
            <div className="builder-container">
              <div className="cardlist">
                {!isLoading &&
                  currentTableData.map((card, index) => {
                    let isDeckBuilder = true;
                    return (
                      <Card
                        key={index}
                        card={card}
                        currentUser={currentUser}
                        isDeckBuilder={isDeckBuilder}
                        onClick={handleAddToDeck}
                      ></Card>
                    );
                  })}
              </div>
              {!isLoading && (
                <div className="builder-deck-container">
                  <div className="deck-data">
                    <div className="deck-deck">Your Deck</div>
                    <DeckData
                      onSaveClick={handleSave}
                      setDeckName={setDeckName}
                      deckName={deckName}
                      currentDeckCards={currentDeckCards}
                    />
                  </div>
                  <ManaBox
                    mana0Height={mana0Height}
                    mana1Height={mana1Height}
                    mana2Height={mana2Height}
                    mana3Height={mana3Height}
                    mana4Height={mana4Height}
                    mana5Height={mana5Height}
                    mana6Height={mana6Height}
                    mana7Height={mana7Height}
                  />
                  {currentDeckCards
                    .sort((a, b) => a.manaCost - b.manaCost)
                    .map((card, index) => {
                      return (
                        <CroppedCards
                          key={index}
                          onRemoveClick={handleRemoveFromDeck}
                          card={card}
                        ></CroppedCards>
                      );
                    })}
                </div>
              )}
            </div>
            {!isLoading && (
              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={cardList.length}
                pageSize={PageSize}
                onPageChange={(page) => setCurrentPage(page)}
              />
            )}
          </Fragment>
        )}
        {isLoading && <div className="loading">Loading...</div>}
        {!isLoading && !isClassPicked && (
          <ClassPicker
            onClassClick={setIsClassPicked}
            setDeckString={setDeckString}
            onClick={handleFetchDeckFromApi}
          />
        )}
        {isClassPicked && !isDeckPicked && (
          <DeckPicker
            onDeckClick={handleOnDeckClick}
            currentUser={currentUser}
            currentClass={isClassPicked}
          />
        )}
      </div>
    </div>
  );
};

export default DeckBuilder;
