import React, { Fragment, useReducer } from 'react';
import uuid from 'uuid/v4';

import Card from './Card';

const cardReducer = (state, action) => {
  switch (action.type) {
    case 'DUPLICATE':
      return state.concat(
        {
          id: uuid(),
          code: action.code,
          image: action.image,
          complete: false,
        },
        {
          id: uuid(),
          code: action.code,
          image: action.image,
          complete: false,
        }
      );
    case 'SHUFFLE':
      return state.concat().sort(() => Math.random() - 0.5);
    case 'TURN':
      return state.map(card => {
        if (card.id === action.id) {
          if (card.complete === false) {
            return {...card, complete: true};
          } else {
            return {...card, complete: false};
          }
        } else {
          return card;
        }
      });
    default:
      throw new Error();
  }
}

function DealCards(props) {

  const [cards, dispatchCards] = useReducer(cardReducer, []);

  React.useEffect(() => {
    // duplicate drawed cards
    props.cards.map(item => (
       dispatchCards({ type: 'DUPLICATE', code: item.code, image: item.image })
    ))
    // duplicate drawed cards
    dispatchCards({ type: 'SHUFFLE'})
  }, [props.cards]);

  return (
      <Fragment>
        {cards.map((item) => (
          <Card code={item.code} image={item.image} key={item.id} id={item.id} complete={item.complete} dispatch={dispatchCards} />
        ))}
      </Fragment>
  );
}

export default DealCards;
