import { fireEvent, render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import Users from "..";

jest.mock("axios");

describe("<Users> suite", () => {
  it("Should call fetch users", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: [
          { title: "test", id: "123" },
          { title: "test", id: "1323" },
        ],
      })
    );
    render(<Users />);

    screen.debug();

    expect(screen.queryByText(/No users/)).toBeInTheDocument();

    waitFor(() => {
      fireEvent.click(screen.getByRole("button"));
    });
    const listItems = await screen.findAllByRole("listitem");
    screen.debug();

    expect(listItems).toHaveLength(2);
  });
});
