console.clear();

let operand1 = 12;
const operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.

// --v-- write your code here --v--

// --^-- write your code here --^--
const add = document.querySelector('[data-js="add"]')
const subtract = document.querySelector('[data-js="subtract"]')
const multiply = document.querySelector('[data-js="multiply"]')
const divide = document.querySelector('[data-js="divide"]')
const exponent = document.querySelector('[data-js="exponent"]')
const modulo = document.querySelector('[data-js="modulo"]')

const increaseOne = document.querySelector('[data-js="increase-by-one"]')
const increaseFive = document.querySelector('[data-js="increase-by-five"]')
const decreaseOne = document.querySelector('[data-js="decrease-by-one"]')
const decreaseFive = document.querySelector('[data-js="decrease-by-five"]')
const multiplyTwo = document.querySelector('[data-js="multiply-by-two"]')
const divideTwo = document.querySelector('[data-js="divide-by-two"]')
/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

// --v-- write your code here --v--
add.addEventListener('click', () =>  {
    let sum = operand1 + operand2
    console.log(sum)
})
subtract.addEventListener('click', () =>  {
    let difference = operand1 - operand2
    console.log(difference)
})
multiply.addEventListener('click', () =>  {
    let product = operand1 * operand2
    console.log(product)
})
divide.addEventListener('click', () =>  {
    let quotient = operand1 / operand2
    console.log(quotient)
})
exponent.addEventListener('click', () =>  {
    let exponent = operand1 ** operand2
    console.log(exponent)
})
modulo.addEventListener('click', () =>  {
    let remainder = operand1 % operand2
    console.log(remainder)
})
// --^-- write your code here --^--

// ----- Update the First Operand -----
increaseOne.addEventListener('click', () =>  {
    let increaseOne = operand1 +1
    console.log(increaseOne)
})
increaseFive.addEventListener('click', () =>  {
    let increaseFive = operand1 + 5
    console.log(increaseFive)
})
decreaseOne.addEventListener('click', () =>  {
    let decreaseOne = operand1 - 1
    console.log(decreaseOne)
})
decreaseFive.addEventListener('click', () =>  {
    let decreaseFive = operand1 - 5
    console.log(decreaseFive)
})
multiplyTwo.addEventListener('click', () =>  {
    let multiplyTwo = operand1 * 2
    console.log(multiplyTwo)
})
divideTwo.addEventListener('click', () =>  {
    let divideTwo = operand1 / 2
    console.log(divideTwo)
})
/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

// --v-- write your code here --v--

// --^-- write your code here --^--
