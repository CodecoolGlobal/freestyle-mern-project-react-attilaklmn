import "./Card.css"

const Card = (props) => {
  return <div className="card">
    <img src={props.card.image} alt="" />
    {props.card.name}
    </div>;
};

export default Card;
