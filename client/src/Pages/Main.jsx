import gabicard from "../gabicard.png";
import aticard from "../aticard.png";
import bogrecard from "../bogrecard.png";
import codecoolcard from "../codecoolcard.png";
import cutecatcard from "../cutecatcard.png";

import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="gabidiv">
        <img className="gabicard" alt="gabi" src={gabicard}></img>
      </div>
      <div className="atidiv">
        <img className="aticard" alt="ati" src={aticard}></img>
      </div>
      <div className="bogrediv">
        <img className="bogrecard" alt="bogre" src={bogrecard}></img>
      </div>
      <div className="codecooldiv">
        <img
          className="codecoolcard"
          alt="codecoolcard"
          src={codecoolcard}
        ></img>
      </div>
      <div className="cutecatdiv">
        <img className="cutecatcard" alt="cutecatcard" src={cutecatcard}></img>
      </div>
    </div>
  );
};

export default Main;
