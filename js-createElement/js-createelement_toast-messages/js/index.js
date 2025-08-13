console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", (e) => {
  // Exercise: Append a new entry to the toast messages container
  const message = document.createElement("li")
  message.textContent = "I'm a toast message."
  message.classList.add("toast-container__message")
  toastContainer.append(message)
  
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.textContent = ""
});
