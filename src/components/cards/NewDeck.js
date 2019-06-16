import React from 'react';
import axios from 'axios';

import Draw from './Draw';
import useDataApi from './Fetch';

function NewDeck(props) {

  let deck = useDataApi(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
  const deckId = deck.data.deck_id;
  let url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${props.quantity}`;

  React.useEffect(() => {
    const reshuffle = async () => {
      const result = await axios(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`);
      deck = result.data;
    };
    reshuffle();
  }, [deckId, props.quantity, props.gameNumber]);


  return(
    <div className="board">
      {deck.isError && <div className="info">Something went wrong ...</div>}

      {deck.isLoading ? (
        <div className="info">Shuffling deck...</div>
      ) : (
        <Draw url={url} />
      )}
    </div>
  );
}

export default NewDeck;
