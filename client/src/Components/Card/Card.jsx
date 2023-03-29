import { useState, useEffect } from "react";

import "./Card.css";

const Card = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn"));
  }, []);

  return (
    <div className="card">
      <img src={props.card.image} alt="" />
      {props.card.name}
      {isLoggedIn && !props.currentUser.favorites.includes(props.card._id) && (
        <button
          type="button"
          onClick={() => props.onFavoriteClick(props.card._id)}
        >
          Add to favorites!
        </button>
      )}
      {isLoggedIn && props.currentUser.favorites.includes(props.card._id) && (
        <button
          type="button"
          onClick={() => props.onFavoriteClick(props.card._id)}
        >
          Remove from favorites!
        </button>
      )}
    </div>
  );
};

export default Card;
