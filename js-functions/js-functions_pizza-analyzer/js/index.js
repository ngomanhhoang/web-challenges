console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // Write your code here
  let pizzaSize1 = pizzaInput1.value
  let pizzaSize2 = pizzaInput2.value
  calculatePizzaGain(pizzaSize1, pizzaSize2)
  updatePizzaDisplay(pizza1, pizzaSize1)
  updateOutputColor(pizzaSize1, pizzaSize2)
});

pizzaInput2.addEventListener("input", () => {
  // Write your code here
  let pizzaSize1 = pizzaInput1.value
  let pizzaSize2 = pizzaInput2.value
  calculatePizzaGain(pizzaSize1, pizzaSize2)
  updatePizzaDisplay(pizza2, pizzaSize2)
  updateOutputColor(pizzaSize1, pizzaSize2)
});

// Task 1: Define the function `calculatePizzaGain` here
function calculatePizzaGain(diameter1, diameter2) {
  const radius1 = diameter1 / 2
  const radius2 = diameter2 / 2

  const areaPizza1 = Math.PI * radius1 * radius1
  const areaPizza2 = Math.PI * radius2 * radius2

  let calculatedValue = (areaPizza2 - areaPizza1) / areaPizza1 * 100
  output.textContent = Math.round(calculatedValue)
}

// Task 2: Define the function `updatePizzaDisplay` here
function updatePizzaDisplay(pizzaElement, newSize) {
  let displaySize = newSize / 24 * 100
  pizzaElement.style.width = displaySize + "px"
}


// Task 3: Define the function `updateOutputColor` here
function updateOutputColor(size1, size2) {
  if (size1 <= size2) {
    outputSection.style.backgroundColor = "var(--red)"
  } else {
    outputSection.style.backgroundColor = "var(--green)"
  }
}
