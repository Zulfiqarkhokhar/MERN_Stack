import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../app/features/counter/counterSlice";

const Counter = () => {
  // reading data from redux store
  const count = useSelector((state) => state.counter.value);

  // changing the data by sending actions to store
  const dispach = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispach(increment())}>+</button>
      <button onClick={() => dispach(decrement())}>-</button>
    </div>
  );
};

export default Counter;
