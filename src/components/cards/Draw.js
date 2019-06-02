import React, { useState, useEffect } from 'react';

import cardback from './../../assets/images/cardback.png';

function NewDeck(props) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function drawCards() {
      // get new deck
      const deck = await fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
      const deckJson = await deck.json();
      var deckId = deckJson.deck_id;
      // draw cards
      const result = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${props.quantity}`);
      const json = await result.json();
      // duplicate every cards
      var tempArray = [];
      json.cards.map(item => (
         tempArray.push(item, item)
      ))
      // shuffle new array
      tempArray.sort(() => Math.random() - 0.5);
      setCards(tempArray);
    };
    drawCards();
  }, [props.quantity]);


  return(
      <div className="board">
        {cards.map((item, i) => (
          <span className="card"><img src={cardback} alt={item.code} id={"card"+i} /></span>
        ))}
      </div>
  );
}



export default NewDeck;
