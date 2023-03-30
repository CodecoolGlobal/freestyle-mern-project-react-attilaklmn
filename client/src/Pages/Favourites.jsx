import React, { useState, useEffect } from 'react';

function Favorites() {
  //This favoriteIds stores the ObjectId-s
  const [favoriteIds, setFavoriteId] = useState([]);
  

  const fetchCurrentUser = (userId) => {
    return fetch(`http://localhost:8080/api/users/${userId}`).then((res) =>
      res.json()
    );
  };

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      fetchCurrentUser(localStorage.getItem("userLoggedIn")).then((user) =>
        setFavoriteId(user.favorites)
      );
    }
  }, []);

  
 
  return (
    <div>
      {favoriteIds.map((favoriteId, index) => (
        <div key={index}>
          <h2>{favoriteId}</h2>
        </div>
      ))}
    </div>
  );
}

export default Favorites;
