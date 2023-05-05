import { useDispatch, useSelector } from "react-redux";
import {
  incremented,
  decremented,
  reset,
  incrementedBy,
  incrementedAsync,
} from "../../store/counter-slice";

import "./style.css";

const Counter = () => {
  const dispatch = useDispatch();
  const { count, status } = useSelector((state) => state.counter);
  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {status === "loading" ? "Loading..." : count}</p>
      <div className="buttons">
        <button onClick={() => dispatch(incremented())}>Increment</button>
        <button onClick={() => dispatch(decremented())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(incrementedBy(10))}>
          Increment by 10
        </button>
        <button onClick={() => dispatch(incrementedAsync(10))}>
          Increment by 10 Async
        </button>
      </div>
    </div>
  );
};

export default Counter;
