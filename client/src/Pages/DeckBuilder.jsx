import { useEffect, useState, useMemo, Fragment } from "react";
import "./DeckBuilder.css";
import Card from "../Components/Card";
import Pagination from "../Components/Card/Pagination";
import Filter from "../Components/Card/Filter";
import ClassPicker from "../Components/ClassPicker";
import DeckPicker from "../Components/DeckPicker";

let PageSize = 10;

const fetchCurrentUser = (userId) => {
  return fetch(`http://localhost:8080/api/users/${userId}`).then((res) =>
    res.json()
  );
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

const DeckBuilder = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cardList, setCardList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [isClassPicked, setIsClassPicked] = useState(false);
  const [isDeckPicked, setIsDeckPicked] = useState(false);
  const [currentDeckCards, setCurrentDeckCards] = useState([]);
  const [deckName, setDeckName] = useState("");

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

  const fetchDeckWithCards = (deckId) => {
    return fetch(`http://localhost:8080/api/decks/${deckId}`).then((res) =>
      res.json()
    );
  };

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      fetchCurrentUser(localStorage.getItem("userLoggedIn")).then((user) =>
        setCurrentUser(user)
      );
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

  const handleAddToDeck = (card) => {
    setCurrentDeckCards([...currentDeckCards, card]);
  };

  const handleRemoveFromDeck = (card) => {
    let newDeck = [...currentDeckCards];
    let index = newDeck.indexOf(card);
    newDeck.splice(index, 1);
    setCurrentDeckCards(newDeck);
  };

  const handleOnDeckClick = (deck) => {
    setIsDeckPicked(deck._id);
    setDeckName(deck.name);
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
      });
    } else {
      updateDeck(deckSchema, isDeckPicked);
    }
  };
  return (
    <div className="main">
      <div className="content">
        {!isClassPicked && <ClassPicker onClassClick={setIsClassPicked} />}
        {isClassPicked && !isDeckPicked && (
          <DeckPicker
            onDeckClick={handleOnDeckClick}
            currentUser={currentUser}
            currentClass={isClassPicked}
          />
        )}
        {isDeckPicked && (
          <Fragment>
            <Filter onFilter={handleFilter} />
            <div className="builder-container">
              <div className="cardlist">
                {!isLoading ? (
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
                  })
                ) : (
                  <div className="loading">Loading...</div>
                )}
              </div>
              <div className="builder-deck-container">
                <div>Deck</div>
                <button onClick={handleSave}>Save!</button>
                <input
                  type="text"
                  onChange={(event) => setDeckName(event.target.value)}
                  defaultValue={deckName}
                ></input>
                {currentDeckCards.map((card, index) => {
                  return (
                    <div key={index}>
                      <img alt="card.name" src={card.cropImage}></img>
                      <div>{card.name}</div>
                      <button onClick={() => handleRemoveFromDeck(card)}>
                        X
                      </button>
                    </div>
                  );
                })}
              </div>
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
      </div>
    </div>
  );
};

export default DeckBuilder;
