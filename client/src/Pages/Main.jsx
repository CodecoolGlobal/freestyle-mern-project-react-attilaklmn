import gabicard from "../gabicard.png";
import aticard from "../aticard.png";

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
    </div>
  );
};

export default Main;
