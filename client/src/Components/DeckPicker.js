const DeckPicker = ({ onDeckClick, currentUser, currentClass }) => {
  let decks = [...currentUser.decks].filter(
    (deck) => Number(deck.class) === Number(currentClass)
  );

  return (
    <div>
      <div>Pick a Deck</div>
      <div>Choose an existing deck</div>
      {decks.map((deck) => {
        return (
          <div key={deck._id} onClick={() => onDeckClick(deck)}>
            {deck.name}
          </div>
        );
      })}
      <div onClick={() => onDeckClick("new")}>Create a new deck</div>
    </div>
  );
};

export default DeckPicker;
