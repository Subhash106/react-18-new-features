import useCounter from "./hook";

const CounterWithCustomHook = () => {
  const { counter, increment } = useCounter(0);
  return (
    <div>
      <p>Count:{counter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default CounterWithCustomHook;
