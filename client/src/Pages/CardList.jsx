import { useEffect, useState } from "react";
import "./CardList.css"
import Card from "../Components/Card";



const CardList = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [cardList, setCardList] = useState([]);

  const fetchCardList = () => {
    setIsLoading(true)
    return fetch("http://localhost:8080/api/cards")
      .then((res) => res.json())
      .then((cards) => {
        return cards.filter(card => {
          if (card.cardSetId === 4) {
            return card
          }
        });
      });
  };

  useEffect(() => {
    fetchCardList().then((cards) => {
      setIsLoading(false)
      setCardList(cards)
    });
  }, []);

  return (
    <div className="cardlist">
      {!isLoading ? (
        cardList.map((card, index) => {
          return <Card key={index} card={card}></Card>;
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default CardList;
