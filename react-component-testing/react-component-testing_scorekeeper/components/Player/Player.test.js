import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
  const handleDecrease = jest.fn();
  const handleIncrease = jest.fn();

  render(
    <Player
      name="playerNames"
      score={4}
      onDecreasePlayerScore={handleDecrease}
      onIncreasePlayerScore={handleIncrease}
    />
  );

  expect(screen.getByText("playerNames")).toBeInTheDocument();
  expect(screen.getByText("4")).toBeInTheDocument();
  expect(screen.getAllByRole("button")).toHaveLength(2);
});

test("calls callbacks when increasing or decreasing score", async () => {
  const handleDecrease = jest.fn();
  const handleIncrease = jest.fn();

  const user = userEvent.setup();
  render(
    <Player
      name="playerNames"
      score={4}
      onDecreasePlayerScore={handleDecrease}
      onIncreasePlayerScore={handleIncrease}
    />
  );
  const decreaseBtn = screen.getByLabelText("Decrease Score");
  const increaseBtn = screen.getByLabelText("Increase Score");

  await user.click(decreaseBtn);
  await user.click(increaseBtn);
  expect(handleDecrease).toHaveBeenCalledTimes(1);
  expect(handleIncrease).toHaveBeenCalledTimes(1);
});
