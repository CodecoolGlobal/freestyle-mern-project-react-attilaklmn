import { useEffect } from "react";

const fetchCardList = () => {
  return fetch(
    "http://localhost:8080/api/cards/filter/?health=4&sort=artistName&sortOrder=desc"
  ).then((res) => res.json());
};

const logCurrent = async () => {
  console.log(await fetchCardList());
};

const Main = () => {
  useEffect(() => {
    logCurrent();
  }, []);
  return <div>Main</div>;
};

export default Main;
