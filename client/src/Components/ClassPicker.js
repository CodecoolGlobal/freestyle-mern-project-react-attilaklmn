const ClassPicker = ({ onClassClick }) => {
  return (
    <div>
      <div>Pick a class!</div>
      <img
        alt="Death Knight"
        src="https://static.wikia.nocookie.net/hearthstone_gamepedia/images/4/41/Death_Knight_icon.png"
        onClick={() => onClassClick("1")}
      ></img>
      <img
        alt="Demon Hunter"
        src="https://static.wikia.nocookie.net/hearthstone_gamepedia/images/0/05/Demon_Hunter_icon.png"
        onClick={() => onClassClick("14")}
      ></img>
      <img
        alt="Druid"
        src="https://static.wikia.nocookie.net/hearthstone_gamepedia/images/7/75/Druid_icon.png"
        onClick={() => onClassClick("2")}
      ></img>
      <img
        alt="Hunter"
        src="https://static.wikia.nocookie.net/hearthstone_gamepedia/images/d/dd/Hunter_icon.png"
        onClick={() => onClassClick("3")}
      ></img>
      <img
        alt="Mage"
        src="https://static.wikia.nocookie.net/hearthstone_gamepedia/images/2/28/Mage_icon.png"
        onClick={() => onClassClick("4")}
      ></img>
      <img
        alt="Paladin"
        src="https://static.wikia.nocookie.net/hearthstone_gamepedia/images/9/9b/Paladin_icon.png"
        onClick={() => onClassClick("5")}
      ></img>
      <img
        alt="Priest"
        src="https://static.wikia.nocookie.net/hearthstone_gamepedia/images/5/54/Priest_icon.png"
        onClick={() => onClassClick("6")}
      ></img>
      <img
        alt="Rogue"
        src="https://static.wikia.nocookie.net/hearthstone_gamepedia/images/c/c0/Rogue_icon.png"
        onClick={() => onClassClick("7")}
      ></img>
      <img
        alt="Warlock"
        src="https://static.wikia.nocookie.net/hearthstone_gamepedia/images/a/a8/Shaman_icon.png"
        onClick={() => onClassClick("9")}
      ></img>
      <img
        alt="Shaman"
        src="https://static.wikia.nocookie.net/hearthstone_gamepedia/images/3/3f/Warlock_icon.png"
        onClick={() => onClassClick("8")}
      ></img>
      <img
        alt="Warrior"
        src="https://static.wikia.nocookie.net/hearthstone_gamepedia/images/c/c8/Warrior_icon.png"
        onClick={() => onClassClick("10")}
      ></img>
    </div>
  );
};

export default ClassPicker;
