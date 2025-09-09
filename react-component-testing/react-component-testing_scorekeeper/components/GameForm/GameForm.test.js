import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  const onCreateGame = jest.fn();
  render(<GameForm onCreateGame={onCreateGame} />);
  expect(screen.getAllByRole("textbox")).toHaveLength(2);
  const button = screen.getByRole("button", { name: /create game/i });
  expect(button).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  const onCreateGame = jest.fn();
  render(<GameForm onCreateGame={onCreateGame} />);
  expect(
    screen.getByRole("form", { name: /create a new game/i })
  ).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {
  const onCreateGame = jest.fn();
  const user = userEvent.setup();

  render(<GameForm onCreateGame={onCreateGame} />);
  const firstInput = screen.getByLabelText("Name of game");
  const secondInput = screen.getByLabelText("Player names, separated by comma");
  await user.type(firstInput, "My Game");
  await user.type(secondInput, "Alice, Bob");
  const submitButton = screen.getByRole("button", { name: /create game/i });
  expect(submitButton).toBeInTheDocument();
  await user.click(submitButton);
  expect(onCreateGame).toHaveBeenCalledWith({
    nameOfGame: "My Game",
    playerNames: ["Alice", "Bob"],
  });
});

test("does not submit form if one input field is left empty", async () => {
  const user = userEvent.setup();

  const onCreateGame = jest.fn();
  render(<GameForm onCreateGame={onCreateGame} />);
  const submitButton = screen.getByRole("button", { name: /create game/i });
  await user.click(submitButton);
  expect(onCreateGame).not.toHaveBeenCalled();
});
