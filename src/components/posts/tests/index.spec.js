import {
  screen,
  render,
  renderHook,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import Posts from "../index";
import "@testing-library/jest-dom";

describe("Posts", () => {
  it("Should test async", async () => {
    render(<Posts />);

    await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));

    expect(
      await screen.findByRole("heading", { name: "List of posts" })
    ).toBeInTheDocument();

    console.log(screen.debug());
  });
});
