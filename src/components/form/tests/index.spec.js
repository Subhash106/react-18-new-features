import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "..";

const defaultData = {
  name: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  tncAccepted: false,
};

describe("Login Form", () => {
  function setup(jsx) {
    return {
      user: userEvent.setup(),
      ...render(jsx),
    };
  }
  //   it("Should submit the form", () => {
  //     const mockSaveFormData = jest.fn();
  //     render(<Form saveData={mockSaveFormData} />);

  //     fireEvent.click(screen.queryByRole("button"));

  //     expect(mockSaveFormData).toBeCalled();
  //   });

  it("Should submit the form", async () => {
    const mockSaveFormData = jest.fn();
    const { user } = setup(<Form saveData={mockSaveFormData} />);

    await user.type(screen.getByRole("textbox", { name: "Name" }), "Test");
    await user.type(
      screen.getByRole("textbox", { name: "Email" }),
      "test@test.com"
    );
    await user.type(
      screen.getByPlaceholderText("Enter your password"),
      "test@123"
    );
    await user.type(
      screen.getByPlaceholderText("Confirm password"),
      "test@123"
    );
    await user.click(screen.getByRole("checkbox"));
    await user.click(screen.getByRole("button", { name: "Sign up" }));

    expect(mockSaveFormData).toHaveBeenCalledWith({
      ...defaultData,
      name: "Test",
      email: "test@test.com",
      password: "test@123",
      passwordConfirmation: "test@123",
      tncAccepted: true,
    });
  });
});
