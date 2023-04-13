import React, { useState, useEffect, useMemo } from "react";
import Card from "../Components/Card";
import Pagination from "../Components/Card/Pagination";

let PageSize = 10;

const fetchCurrentUser = (userId) => {
  return fetch(`http://localhost:8080/api/users/${userId}`).then((res) =>
    res.json()
  );
};

const fetchAddToFavorite = (cardId, userId) => {
  return fetch(`http://localhost:8080/api/users/cards/${userId}`, {
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

function Favorites() {
  //This favoriteIds stores the ObjectId-s
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentUser, setCurrentUser] = useState(undefined);

  const fetchFavorites = () => {
    setIsLoading(true);
    return fetch(
      `http://localhost:8080/api/users/favorites/${localStorage.getItem(
        "userLoggedIn"
      )}`
    )
      .then((res) => res.json())
      .then((user) => user.favorites);
  };

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      fetchCurrentUser(localStorage.getItem("userLoggedIn")).then((user) =>
        setCurrentUser(user)
      );
    }
  }, []);

  useEffect(() => {
    fetchFavorites().then((cards) => {
      setFavorites(cards);
      setIsLoading(false);
    });
  }, []);

  const handleAddToFavorites = async (cardId) => {
    const user = await fetchAddToFavorite(
      cardId,
      localStorage.getItem("userLoggedIn")
    );
    setCurrentUser(user);
    fetchFavorites().then((cards) => {
      setFavorites(cards);
      setIsLoading(false);
    });
  };

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return favorites.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, isLoading]);

  return (
    <div className="content">
      <div className="cardlist">
        {!isLoading ? (
          currentTableData.map((card, index) => {
            let isDeckBuilder = false;
            return (
              <Card
                key={index}
                card={card}
                onFavoriteClick={handleAddToFavorites}
                currentUser={currentUser}
                isDeckBuilder={isDeckBuilder}
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
          totalCount={favorites.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
}

export default Favorites;
