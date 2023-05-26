import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import SimpleCounter from ".";
import CounterWithCustomHook from "./counterWithCustomHook";
import useCounter from "./hook";

describe("<SimpleCounter />", () => {
  it("Should render initial count", () => {
    render(<SimpleCounter />);

    screen.debug();

    expect(screen.queryByText(/0/)).toBeInTheDocument();
  });

  it("Should increment the count by 1", () => {
    render(<SimpleCounter />);

    fireEvent.click(screen.getByRole("button"));

    screen.debug();

    expect(screen.queryByText(/1/)).toBeInTheDocument();
  });

  it("Should render counter with custom hook", () => {
    render(<CounterWithCustomHook />);

    screen.debug();

    expect(screen.queryByText(/0/)).toBeInTheDocument();
  });

  it("Should render custom hook", () => {
    const { result } = renderHook(useCounter);

    expect(result.current.counter).toBe(0);
  });

  it("Should render custom hook", () => {
    const { result } = renderHook(useCounter, {
      initialProps: 10,
    });

    expect(result.current.counter).toBe(10);

    act(() => {
      result.current.increment();
    });

    expect(result.current.counter).toBe(11);
  });
});
