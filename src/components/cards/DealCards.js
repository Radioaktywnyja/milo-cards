import React, { Fragment, useReducer, useEffect, useState, useRef } from 'react';
import uuid from 'uuid/v4';

import Card from './Card';

const cardReducer = (state, action) => {
  switch (action.type) {
    case 'DUPLICATE':
      return {
        ...state,
        deck: state.deck.concat(
        {
          id: uuid(),
          code: action.code,
          image: action.image,
          complete: false,
          checked: false
        },
        {
          id: uuid(),
          code: action.code,
          image: action.image,
          complete: false,
          checked: false
        }
      ),
    }
    case 'SHUFFLE':
      return {
        ...state,
        deck: state.deck.concat().sort(() => Math.random() - 0.5)
      }
    case 'TURN':
      return {
        ...state,
        deck: state.deck.map(card => {
        if (card.id === action.id) {
          if (card.complete === false && !card.checked) {
            return {...card, complete: true};
          } else {
            return {...card, complete: false};
          }
        } else {
          return card;
        }
      })
    }
    case 'CHECK_FIRST':
      return {
        ...state,
        checker: state.checker = 1,
        cardA: { code: action.code, id: action.id }
      }
    case 'CHECK_SECOND':
      return {
        ...state,
        checker: state.checker = 2,
        cardB: { code: action.code, id: action.id },
      }
    case 'COMPARE':
      return {
        ...state,
        deck: state.deck.map(card => {
          if (state.cardA.code === state.cardB.code && (card.id === action.cardA.id || card.id === action.cardB.id)) {
            return {...card, checked: true};
          } else if (card.id === action.cardA.id || card.id === action.cardB.id) {
            return {...card, complete: false};
          } else {
            return card;
          }
        }),
        checker: 0,
        cardA: { id: 0 },
        cardB: { id: 1 },
        counter: state.cardA.code === state.cardB.code ? state.counter + 2 : state.counter
      }
    default:
      throw new Error();
  }
}

const Wictory = () => {
  return <div class="info victory">!!! VICTORY !!!</div>;
};

function DealCards(props) {

  const [isWin, setIsWin] = useState(false);
  const [cards, dispatchCards] = useReducer(cardReducer, {
    deck: [],
    checker: 0,
    counter: 0,
    cardA: { code: "cardA" },
    cardB: { code: "cardB" }
  });

  useEffect(() => {
    // duplicate drawed cards
    props.cards.map(item => (
       dispatchCards({ type: 'DUPLICATE', code: item.code, image: item.image })
    ))
    // duplicate drawed cards
    dispatchCards({ type: 'SHUFFLE'})
  }, [props.cards]);

  useEffect(() => {
    if (cards.checker === 2) {
      setTimeout(() => {
        dispatchCards({
          type: "COMPARE",
          cardA: cards.cardA,
          cardB: cards.cardB
        });
      }, 750);
    }
  }, [cards.cardA, cards.cardB, cards.checker]);

  const deckLength = cards.deck.length;
  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    } else if (cards.counter === deckLength) {
      setIsWin(true);
    }
  }, [cards.counter, deckLength]);


  return (
    <Fragment>
      {isWin ? (
        <Wictory />
      ) : (
        cards.deck.map(item => (
          <Card
            code={item.code}
            image={item.image}
            key={item.id}
            id={item.id}
            complete={item.complete}
            checked={item.checked}
            dispatch={dispatchCards}
            checker={cards.checker}
            cardA={cards.cardA}
            cardB={cards.cardB}
          />
        ))
      )}
    </Fragment>
  );
}

export default DealCards;
