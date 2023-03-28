import { useEffect, useState, useMemo } from "react";
import "./CardList.css"
import Card from "../Components/Card";
import Pagination from "../Components/Card/Pagination";

let PageSize = 12;

const CardList = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [cardList, setCardList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchCardList = () => {
    setIsLoading(true)
    return fetch("http://localhost:8080/api/cards")
      .then((res) => res.json())
      .then((cards) => {
        return cards.filter(card => {
          if (card.collectible === 1) {
              return card
          }
        });
      });
  };

  useEffect(() => {
    fetchCardList().then((cards) => {
      setCardList(cards)
      setIsLoading(false)
    });
  }, []);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return cardList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, isLoading]);

  return (
    <div className="content">
      {!isLoading && <div className="filters" >
        Filters.
      </div>}
      <div className="cardlist">
      {!isLoading ? (
        currentTableData.map((card, index) => {
          return <Card key={index} card={card}></Card>;
        })
        ) : (
          <div className="loading">Loading...</div>
      )}
          </div>
        {!isLoading && <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={cardList.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />}

    </div>
  );
};

export default CardList;


/*
//////// cardID counter://////////
//before return:
const cardIDs = {};
  const cardIDsArray = []

  const showIDs = () => {
    for (const [key, value] of Object.entries(cardIDs)) {
          cardIDsArray.push(`ID: ${key}: ${value} darab`)
    }
  }

  //inside jsx map:
  if (cardIDs[`${card.cardSetId}`]) {
            cardIDs[`${card.cardSetId}`]++;
          } else {
            cardIDs[`${card.cardSetId}`] = 1;
          }

  //after ternary in jsx:
{showIDs()}
      {cardIDsArray.map(id => {
        return (
          <div>{id}</div>
        )
      })}
*/