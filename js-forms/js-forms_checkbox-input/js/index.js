console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const success = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function hideSuccess() {
  success.setAttribute("hidden", "");
}

function showSuccess() {
  success.removeAttribute("hidden");
}
hideSuccess();
hideTosError();
tosCheckbox.addEventListener("input", (e) => {
  if (e.target.checked) {
    hideTosError();
  } else {
    showTosError();
  }
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (tosCheckbox.checked) {
    showSuccess();
  } else {
    hideSuccess();
    showTosError()
    return;
  }
  // --v-- write your code here --v--

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  // alert("Form submitted");
});
