import React, { useState } from 'react';

import cardback from './../../assets/images/cardback.png';

function Card(props) {
  const [active, setActive] = useState(false);

  function toggleActive() {
    setActive(active === false ? true : false);
    // props.setCardsShown(props.cardsShown + 1);
  }

  return(
    <span className="card"><img src={active === false ? cardback : props.image} alt={props.code} className="card" id={"card"+props.index} onClick={toggleActive} /></span>
  );
}

export default Card;
