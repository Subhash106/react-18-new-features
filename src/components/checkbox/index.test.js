import { cleanup, render, fireEvent } from "@testing-library/react";
import Checkbox from ".";

afterEach(cleanup);

it("Checkbox changes the text after change", () => {
  const { queryByLabelText, getByLabelText } = render(
    <Checkbox labelOff="Off" labelOn="On" />
  );

  expect(queryByLabelText(/Off/i)).toBeTruthy();
  fireEvent.click(getByLabelText(/Off/i));
  expect(queryByLabelText(/On/i)).toBeTruthy();
});
