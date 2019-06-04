import React, { useState } from 'react';

import Draw from './Draw';
import useDataApi from './Fetch';

function NewDeck(props) {
  const [cardsShown, setCardsShown] = useState(0);

  const deck = useDataApi(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
  const url = `https://deckofcardsapi.com/api/deck/${deck.data.deck_id}/draw/?count=${props.quantity}`;

  return(
      <div className="board">

        {deck.isError && <div>Something went wrong ...</div>}

        {deck.isLoading ? (
          <div>Loading deck...</div>
        ) : (
          <Draw url={url} />
        )}
        {cardsShown}
      </div>
  );
}

export default NewDeck;
