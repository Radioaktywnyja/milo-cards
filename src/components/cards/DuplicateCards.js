import React, { Fragment } from 'react';

import Card from './Card';

function DuplicateCards(props) {

  let cards = [];
  // duplicate drawed cards
  props.cards.map(item => (
     cards.push(item, item)
  ))
  // shuffle new array
  cards.sort(() => Math.random() - 0.5);


  return (
    <Fragment>
      {cards.map((item, i) => (
        <Card index={i} code={item.code} image={item.image}/>
      ))}
    </Fragment>
  );
}

export default DuplicateCards;
