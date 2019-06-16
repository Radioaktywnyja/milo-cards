import React, { useState } from "react";

function MemoryOptions(props) {
  const [pairs, setPairs] = useState(props.quantity);

  const increase = () => {
    if (pairs < 52) {
      setPairs(pairs + 1);
    }
  };

  const decrease = () => {
    if (pairs > 2) {
      setPairs(pairs - 1);
    }
  };

  const restart = () => {
    props.setQuantity(pairs);
  };

  return (
    <div class="options">
      <span>Pairs: </span>
      <button onClick={increase}>+</button>
      <span className="pairs-quantity">{pairs}</span>
      <button onClick={decrease}>-</button>
      <button onClick={restart}>Set</button>
    </div>
  );
}

export default MemoryOptions;
