import { useState } from "react";

const useCounter = (count = 0) => {
  const [counter, setCounter] = useState(count);

  const increment = () => {
    setCounter((cnt) => cnt + 1);
  };

  return { counter, increment };
};

export default useCounter;
