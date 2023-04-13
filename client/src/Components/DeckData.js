import { Fragment } from "react";

const DeckData = ({ onSaveClick, setDeckName, deckName, currentDeckCards }) => {
  return (
    <Fragment>
      <button className="save-deck-button" onClick={onSaveClick}>
        Save!
      </button>
      <input
        className="deck-name-input"
        type="text"
        onChange={(event) => setDeckName(event.target.value)}
        defaultValue={deckName}
      ></input>
      <div className="card-count">Card count: {currentDeckCards.length}/30</div>
    </Fragment>
  );
};

export default DeckData;
