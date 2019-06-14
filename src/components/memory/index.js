import React, { useState } from "react";
import "./../../assets/styles/style.scss";

import MemoryOptions from "./MemoryOptions";
import NewDeck from "./../cards/NewDeck";
import useDataApi from './../cards/Fetch.js';

function Memory() {
  const [quantity, setQuantity] = useState(12);
  const [gameNumber, setGameNumber] = useState(1);

  const deck = useDataApi(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);

  return (
    <div className="memory">
      <MemoryOptions quantity={quantity} setQuantity={setQuantity} gameNumber={gameNumber} setGameNumber={setGameNumber} />
      <NewDeck quantity={quantity} gameNumber={gameNumber} deck={deck}/>
    </div>
  );
}

export default Memory;
