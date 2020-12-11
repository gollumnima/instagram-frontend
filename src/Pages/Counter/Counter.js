import React from "react";

const Counter = () => {
  return (
    <div>
      <p>
        Cicked: <span className="counter-value">0</span> times
      </p>
      <button className="increment">+</button>
      <button className="decrement">-</button>
      <button className="incrementIfOdd">incrementIfOdd</button>
      <button className="incrementAsync">incrementAsync</button>
    </div>
  );
};

export default Counter;
