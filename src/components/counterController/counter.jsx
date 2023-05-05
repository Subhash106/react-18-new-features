import { useState } from "react";
import "./style.css";

const Counter = ({ person }) => {
  const [count, setCount] = useState(0);
  const [hover, setHover] = useState(false);

  let className = "counter";

  if (hover) {
    className += " hover";
  }

  const incrementHandler = () => {
    setCount(count + 1);
  };

  return (
    <div
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <p>{`${person}'s count`}</p>
      <p>{count}</p>
      <button onClick={incrementHandler}>Add 1</button>
    </div>
  );
};

export default Counter;
