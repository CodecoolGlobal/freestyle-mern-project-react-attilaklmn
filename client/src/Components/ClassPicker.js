import "./ClassPicker.css";

const ClassPicker = ({ onClassClick }) => {
  return (
    <div className="class-picker-container">
      <div className="pick-a-class">Pick a class!</div>
      <div className="all-class-container">
        <div className="image-title-container">
          <img
            className="class-image"
            alt="Death Knight"
            src="https://static.wikia.nocookie.net/hearthstone_gamepedia/images/4/41/Death_Knight_icon.png"
            onClick={() => onClassClick("1")}
          ></img>
          <div className="class-title">Death Knight</div>
        </div>
        <div className="image-title-container">
          <img
            className="class-image"
            alt="Demon Hunter"
            src="https://static.wikia.nocookie.net/hearthstone_gamepedia/images/0/05/Demon_Hunter_icon.png"
            onClick={() => onClassClick("14")}
          ></img>
          <div className="class-title">Demon Hunter</div>
        </div>
        <div className="image-title-container">
          <img
            className="class-image"
            alt="Druid"
            src="https://static.wikia.nocookie.net/hearthstone_gamepedia/images/7/75/Druid_icon.png"
            onClick={() => onClassClick("2")}
          ></img>
          <div className="class-title">Druid</div>
        </div>
        <div className="image-title-container">
          <img
            className="class-image"
            alt="Hunter"
            src="https://static.wikia.nocookie.net/hearthstone_gamepedia/images/d/dd/Hunter_icon.png"
            onClick={() => onClassClick("3")}
          ></img>
          <div className="class-title">Hunter</div>
        </div>
        <div className="image-title-container">
          <img
            className="class-image"
            alt="Mage"
            src="https://static.wikia.nocookie.net/hearthstone_gamepedia/images/2/28/Mage_icon.png"
            onClick={() => onClassClick("4")}
          ></img>
          <div className="class-title">Mage</div>
        </div>
        <div className="image-title-container">
          <img
            className="class-image"
            alt="Paladin"
            src="https://static.wikia.nocookie.net/hearthstone_gamepedia/images/9/9b/Paladin_icon.png"
            onClick={() => onClassClick("5")}
          ></img>
          <div className="class-title">Paladin</div>
        </div>
        <div className="image-title-container">
          <img
            className="class-image"
            alt="Priest"
            src="https://static.wikia.nocookie.net/hearthstone_gamepedia/images/5/54/Priest_icon.png"
            onClick={() => onClassClick("6")}
          ></img>
          <div className="class-title">Priest</div>
        </div>
        <div className="image-title-container">
          <img
            className="class-image"
            alt="Rogue"
            src="https://static.wikia.nocookie.net/hearthstone_gamepedia/images/c/c0/Rogue_icon.png"
            onClick={() => onClassClick("7")}
          ></img>
          <div className="class-title">Rogue</div>
        </div>
        <div className="image-title-container">
          <img
            className="class-image"
            alt="Warlock"
            src="https://static.wikia.nocookie.net/hearthstone_gamepedia/images/a/a8/Shaman_icon.png"
            onClick={() => onClassClick("9")}
          ></img>
          <div className="class-title">Warlock</div>
        </div>
        <div className="image-title-container">
          <img
            className="class-image"
            alt="Shaman"
            src="https://static.wikia.nocookie.net/hearthstone_gamepedia/images/3/3f/Warlock_icon.png"
            onClick={() => onClassClick("8")}
          ></img>
          <div className="class-title">Shaman</div>
        </div>
        <div className="image-title-container">
          <img
            className="class-image"
            alt="Warrior"
            src="https://static.wikia.nocookie.net/hearthstone_gamepedia/images/c/c8/Warrior_icon.png"
            onClick={() => onClassClick("10")}
          ></img>
          <div className="class-title">Warrior</div>
        </div>
      </div>
    </div>
  );
};

export default ClassPicker;
