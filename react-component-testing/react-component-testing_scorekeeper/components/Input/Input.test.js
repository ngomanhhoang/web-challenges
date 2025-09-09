import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(
    <Input
      labelText="Name of game"
      name="nameOfGame"
      placeholder="e.g. Dodelido"
      value=""
      onChange={() => {}}
      required
    />
  );
  const input = screen.getByLabelText("Name of game");
  expect(screen.getByText("Name of game")).toBeInTheDocument();
  expect(input).toHaveAttribute("placeholder", "e.g. Dodelido");
  expect(input).toHaveAttribute("name", "nameOfGame");
});

test("calls callback on every user input", async () => {
  const onChangeFunction = jest.fn();
  render(
    <Input
      labelText="Name of game"
      onChange={onChangeFunction}
      name="nameOfGame"
      placeholder="e.g. Dodelido"
      value=""
    />
  );
  const input = screen.getByLabelText("Name of game");
  const user = userEvent.setup();
  await user.type(input, "Test");
  expect(onChangeFunction).toHaveBeenCalledTimes(4);
});
