const AutomaticBatching = () => {
  console.log("AutomaticBatching rendered");
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  const countHandler = () => {
    setCount((count) => count + 1);
    setFlag((flag) => !flag);
  };

  const countHandlerAsync = () => {
    setTimeout(() => {
      setCount((count) => count + 1);
      setFlag((flag) => !flag);
    }, 3000);
  };

  return (
    <div className="App">
      <p style={{ color: flag ? "green" : "red" }}>{count}</p>
      <button onClick={countHandler}>Click</button>
      <button onClick={countHandlerAsync}>Click Async</button>
    </div>
  );
};

export default AutomaticBatching;
