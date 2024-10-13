import React from "react";

const Counter = ({ count, onClickHandler }) => {
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={onClickHandler}>Add</button>
    </div>
  );
};

export default Counter;
