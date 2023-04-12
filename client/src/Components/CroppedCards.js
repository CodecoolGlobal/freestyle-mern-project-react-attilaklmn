import { Fragment, useState } from "react";

import "./CroppedCards.css";

const CroppedCards = ({ card, onRemoveClick }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="cropped-card">
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
              src={open ? card.image : card.cropImage}
              style={
                open
                  ? {
                      scale: "5",
                      width: "100px",
                      zIndex: "30",
                      position: "absolute",
                      right: "250px",
                    }
                  : {
                      scale: "1",
                      objectFit: "contain",
                      position: "relative",
                      zIndex: "20",
                    }
              }
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
  );
};

export default CroppedCards;
