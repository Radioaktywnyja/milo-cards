import React from 'react';

import cardback from './../../assets/images/cardback.png';
import emptycard from './../../assets/images/null.png';

function Card(props) {

  function turnCard() {
    if (props.checked === false && props.id !== props.cardA.id && props.checker < 2) {
      props.dispatch({type: 'TURN', id: props.id});
      if (props.checker === 0) {
        props.dispatch({type: 'CHECK_FIRST', id: props.id, code: props.code});
      } else if (props.checker === 1) {
        props.dispatch({type: 'CHECK_SECOND', id: props.id, code: props.code});
      }
    }
  }

  return(
    <span className="card">
      <img
        src={props.checked === true ? emptycard : props.complete === false ? cardback : props.image}
        alt={props.code}
        className="card"
        id={props.id}
        onClick={turnCard} 
      />
    </span>
  );
}

export default Card;
