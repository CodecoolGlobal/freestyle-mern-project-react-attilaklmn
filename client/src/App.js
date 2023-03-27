import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    let url =
      "https://us.api.blizzard.com/hearthstone/cards?locale=en_US&page=1&pageSize=500&access_token=EUeqdlUwbWgpLWAMMNFsz7nNdyDVt4mqcx";
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
