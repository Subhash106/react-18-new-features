import { findByText, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchController from "..";

describe("<SearchController>", () => {
  it("Should render SearchController", async () => {
    render(<SearchController />);

    expect(screen.getByText("Search:")).toBeInTheDocument();

    expect(screen.queryByText(/Signed in as/)).toBeNull();

    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
  });

  it("Should trigger onchange", async () => {
    render(<SearchController />);

    await screen.findByText(/Signed in as/);

    screen.debug();

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Javascript" },
    });

    screen.debug();
  });
});
