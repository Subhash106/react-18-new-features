import { useState } from "react";
import { connect } from "react-redux";

const Count = (props) => {
  return (
    <>
      <p>{props.count}</p>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
    </>
  );
};

const increment = () => ({
  type: "incremented",
});

const decrement = () => ({
  type: "decremented",
});

const asyncDecrement = () => {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(decrement());
    }, 2000);
  };
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(asyncDecrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Count);
