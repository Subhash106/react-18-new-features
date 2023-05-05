import { useState } from "react";
import Counter from "./counter";

const CounterController = () => {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <>
      <div style={{ display: "flex", gap: "1rem" }}>
        {/* {isPlayerA && <Counter person="Sarah" />}
        {!isPlayerA && <Counter person="Taylor" />} */}

        {isPlayerA ? (
          <Counter key="Sarah" person="Sarah" />
        ) : (
          <Counter key="Taylor" person="Taylor" />
        )}
      </div>
      <button onClick={() => setIsPlayerA(!isPlayerA)}>Next Player</button>
    </>
  );
};

export default CounterController;
