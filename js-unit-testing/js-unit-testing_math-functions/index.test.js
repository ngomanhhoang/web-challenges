import { add, subtract, multiply, divide } from ".";

test("adds numbers", () => {
  expect(add(2, 3)).toBe(5);
  expect(add(-2, -3)).toBeLessThan(-1);
  expect(add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("subtract", () => {
  expect(subtract(15, 5)).toBe(10);
  expect(subtract(1, 3)).toBeLessThan(-1);
});

test("multiply", () => {
  expect(multiply(2, 4)).toBe(8);
  expect(multiply(-2, 4)).toBe(-8);
  expect(multiply(2, -4)).toBe(-8);
  expect(multiply(-2, -4)).toBe(8);
});

test("divide", () => {
  expect(divide(9, 3)).toBe(3);
  expect(divide(5, 0)).toBe("You should not do this!");
});
