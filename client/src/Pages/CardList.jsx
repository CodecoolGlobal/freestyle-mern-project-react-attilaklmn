import { useEffect, useState } from "react";

import Card from "../Components/Card";

const fetchCardList = () => {
  return fetch("http://localhost:8080/api/cards")
    .then((res) => res.json())
    .then((cards) => {
      return cards;
    });
};

const CardList = () => {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    fetchCardList().then((cards) => setCardList(cards));
  }, []);

  return (
    <div>
      {cardList ? (
        cardList.map((card, index) => {
          return <Card key={index} card={card}></Card>;
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CardList;
