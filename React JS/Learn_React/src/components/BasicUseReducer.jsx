import React, { useReducer } from "react";

const intialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state, count: state.count + 1 };
    case "minus":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    default:
      return state;
  }
};

const BasicUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "add" })}>+</button>
      <button onClick={() => dispatch({ type: "minus" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default BasicUseReducer;
