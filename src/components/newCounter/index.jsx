import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./store";

const NewCounter = () => {
  const dispatch = useDispatch();

  const { count } = useSelector((state) => state.counter);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default NewCounter;
