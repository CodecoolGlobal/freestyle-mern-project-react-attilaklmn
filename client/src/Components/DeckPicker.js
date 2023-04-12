import "./DeckPicker.css";

const DeckPicker = ({ onDeckClick, currentUser, currentClass }) => {
  let decks = [...currentUser.decks].filter(
    (deck) => Number(deck.class) === Number(currentClass)
  );

  return (
    <div className="deck-picker-container">
      <div className="pick-a-deck">Pick a Deck</div>
      <div className="deck-choices-container">
        {decks.length > 0 && (
          <div className="choose-existing-deck">
            <div className="choose-existing-deck-text">
              Choose an existing deck
            </div>
            <div className="existing-decks-container">
              {decks.map((deck) => {
                return (
                  <div
                    className="deck-to-choose"
                    key={deck._id}
                    onClick={() => onDeckClick(deck)}
                  >
                    {deck.name}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div className="create-new-deck" onClick={() => onDeckClick("new")}>
          Create a new deck
        </div>
      </div>
    </div>
  );
};

export default DeckPicker;
