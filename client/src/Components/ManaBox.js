const ManaBox = ({
  mana0Height,
  mana1Height,
  mana2Height,
  mana3Height,
  mana4Height,
  mana5Height,
  mana6Height,
  mana7Height,
}) => {
  return (
    <div className="mana-box-container">
      <div className="mana-box">
        <div
          className="mana-column"
          style={{ height: `${mana0Height}%` }}
        ></div>
        <div
          className="mana-column"
          style={{ height: `${mana1Height}%` }}
        ></div>
        <div
          className="mana-column"
          style={{ height: `${mana2Height}%` }}
        ></div>
        <div
          className="mana-column"
          style={{ height: `${mana3Height}%` }}
        ></div>
        <div
          className="mana-column"
          style={{ height: `${mana4Height}%` }}
        ></div>
        <div
          className="mana-column"
          style={{ height: `${mana5Height}%` }}
        ></div>
        <div
          className="mana-column"
          style={{ height: `${mana6Height}%` }}
        ></div>
        <div
          className="mana-column"
          style={{ height: `${mana7Height}%` }}
        ></div>
      </div>
      <div className="mana-number-container">
        <div className="mana-number">0</div>
        <div className="mana-number">1</div>
        <div className="mana-number">2</div>
        <div className="mana-number">3</div>
        <div className="mana-number">4</div>
        <div className="mana-number">5</div>
        <div className="mana-number">6</div>
        <div className="mana-number">7</div>
      </div>
    </div>
  );
};

export default ManaBox;
