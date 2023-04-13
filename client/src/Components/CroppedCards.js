import { Fragment, useState } from "react";

import "./CroppedCards.css";

const CroppedCards = ({ card, onRemoveClick }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="cropped-positioner">
      <div
        className="cropped-card"
        onMouseOver={() => setOpen(true)}
        onMouseOut={() => setOpen(false)}
      >
        <div className="manacost-name-container">
          <div className="cropped-card-manacost">{card.manaCost}</div>
          <div className="cropped-card-name">{card.name}</div>
        </div>
        <div className="image-button-container">
          <div className="full-style-cropped">
            <div className="cropped-image-container">
              <img
                className="cropped-card-image"
                alt={card.name}
                src={card.cropImage}
              ></img>
            </div>
          </div>

          <button
            className="cropped-card-remove-button"
            onClick={() => onRemoveClick(card)}
          >
            X
          </button>
        </div>
      </div>
      <img
        className="cropped-normal-image"
        alt={card.name}
        src={card.image}
        style={{
          position: "absolute",
          opacity: open ? "1" : "0",
          zIndex: open ? "100" : "-100",
          right: open ? "400px" : "800px",
          top: open ? "-235px" : "-235px",
        }}
      ></img>
    </div>
  );
};

export default CroppedCards;
