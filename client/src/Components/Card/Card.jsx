import { useState, useEffect, Fragment } from "react";

import "./Card.css";

const Card = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDeckBuilder] = useState(props.isDeckBuilder);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn"));
  }, []);

  return (
    <div className="card">
      {!isDeckBuilder && (
        <Fragment>
          <img src={props.card.image} alt="" />
          <div className="card-name">{props.card.name}</div>
          {isLoggedIn &&
            !props.currentUser.favorites.includes(props.card._id) && (
              <button
                type="button"
                className="favorite-button"
                onClick={() => props.onFavoriteClick(props.card._id)}
              >
                Add to favorites!
              </button>
            )}
          {isLoggedIn &&
            props.currentUser.favorites.includes(props.card._id) && (
              <button
                type="button"
                className="favorite-button"
                onClick={() => props.onFavoriteClick(props.card._id)}
              >
                Remove from favorites!
              </button>
            )}
        </Fragment>
      )}
      {isDeckBuilder && (
        <Fragment>
          <img
            onClick={() => props.onClick(props.card)}
            src={props.card.image}
            alt=""
          />
          <div className="card-name">{props.card.name}</div>
        </Fragment>
      )}
    </div>
  );
};

export default Card;
