import { useEffect, useState, useMemo } from "react";
import "./CardList.css";
import Card from "../Components/Card";
import Pagination from "../Components/Card/Pagination";

let PageSize = 12;

const fetchCurrentUser = (userId) => {
  return fetch(`http://localhost:8080/api/users/${userId}`).then((res) =>
    res.json()
  );
};

const fetchAddToFavorite = (cardId, userId) => {
  return fetch(`http://localhost:8080/api/users/${userId}`, {
    method: "PATCH",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ cardId }),
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then((res) => {
      if (res.favorites.includes(cardId)) {
        alert("Card added to favorites!");
      } else {
        alert("Card removed from favorites!");
      }
      return res;
    });
};

const CardList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cardList, setCardList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentUser, setCurrentUser] = useState(undefined);

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

  const handleAddToFavorites = async (cardId) => {
    const user = await fetchAddToFavorite(
      cardId,
      localStorage.getItem("userLoggedIn")
    );
    setCurrentUser(user);
  };

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return cardList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, isLoading]);

  return (
    <div className="main">
      <div className="content">
        {!isLoading && <div className="filters">Filters.</div>}
        <div className="cardlist">
          {!isLoading ? (
            currentTableData.map((card, index) => {
              return (
                <Card
                  key={index}
                  card={card}
                  onFavoriteClick={handleAddToFavorites}
                  currentUser={currentUser}
                ></Card>
              );
            })
          ) : (
            <div className="loading">Loading...</div>
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
      </div>
    </div>
  );
};

export default CardList;

/*
//////// cardID counter://////////
//before return:
const cardIDs = {};
  const cardIDsArray = []

  const showIDs = () => {
    for (const [key, value] of Object.entries(cardIDs)) {
          cardIDsArray.push(`ID: ${key}: ${value} darab`)
    }
  }

  //inside jsx map:
  if (cardIDs[`${card.cardSetId}`]) {
            cardIDs[`${card.cardSetId}`]++;
          } else {
            cardIDs[`${card.cardSetId}`] = 1;
          }

  //after ternary in jsx:
{showIDs()}
      {cardIDsArray.map(id => {
        return (
          <div>{id}</div>
        )
      })}
*/
