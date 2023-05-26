import { useState } from "react";

const SimpleCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={() => setCount((cnt) => cnt + 1)}>Increment</button>
    </div>
  );
};

export default SimpleCounter;
