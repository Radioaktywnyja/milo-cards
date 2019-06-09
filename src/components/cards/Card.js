import React from 'react';

import cardback from './../../assets/images/cardback.png';

function Card(props) {

  function turnCard() {
    props.dispatch({type: 'TURN', id: props.id});
  }

  return(
    <span className="card"><img src={props.complete === false ? cardback : props.image} alt={props.code} className="card" id={props.id} onClick={turnCard} /></span>
  );
}

export default Card;
