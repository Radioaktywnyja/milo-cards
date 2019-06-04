import React from 'react';
import './../../assets/styles/style.scss';

import NewDeck from './../cards/NewDeck';

function Memory() {
  return(
    <div className="memory">
      <NewDeck quantity="12" />
    </div>
  );
}

export default Memory;
