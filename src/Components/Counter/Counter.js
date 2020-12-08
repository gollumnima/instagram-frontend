import React, { useReducer } from "react";

const Counter = () => {
  const [sum, dispatch] = useReducer((action, state) => {
    return state + action;
  }, 0);

  return (
    <div>
      {sum}
      <button onClick={() => dispatch(1)}>+</button>
    </div>
  );
};

export default Counter;
