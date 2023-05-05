import { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    console.log("I am test");

    return () => {
      console.log("Test is unmounting...");
    };
  }, []);
  return <p>Test component</p>;
};

export default Test;
