import "./Card.css"

const Card = (props) => {

  const handleAddToFavorites = event => {
    event.preventDefault();
    console.log(`Adding card with ID ${props.card._id} to favorites`)
  }

  return <div className="card">
    <img src={props.card.image} alt="" />
    {props.card.name}
    <button type="button" onClick={handleAddToFavorites} >Add to favorites!</button>
    </div>;
};

export default Card;
