import { Fragment, useState } from "react";

import "./CroppedCards.css";

const CroppedCards = ({ card, onRemoveClick }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="cropped-card"
      /*  style={{ backgroundImage: `url("${card.cropImage}")` } }*/
    >
      <div className="manacost-name-container">
        <div className="cropped-card-manacost">{card.manaCost}</div>
        <div className="cropped-card-name">{card.name}</div>
      </div>
      <div className="image-button-container">
        <div
          className="full-style-cropped"
          onMouseOver={() => setOpen(true)}
          onMouseOut={() => setOpen(false)}
        >
          <div className="cropped-image-container">
            <img
              className="cropped-card-image"
              alt={card.name}
              src={card.cropImage}
            ></img>
          </div>
          <img
            className="cropped-normal-image"
            alt={card.name}
            src={card.image}
            style={open ? { opacity: "1" } : { opacity: "0" }}
          ></img>
        </div>

        <button
          className="cropped-card-remove-button"
          onClick={() => onRemoveClick(card)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default CroppedCards;
