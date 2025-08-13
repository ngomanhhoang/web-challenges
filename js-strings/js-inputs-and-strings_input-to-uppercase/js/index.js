console.clear();

const firstInput = document.querySelector('[data-js="first-input"]');
const upperCaseBtn = document.querySelector('[data-js="button-uppercase"]');

upperCaseBtn.addEventListener("click", () => {
  const upperCase = firstInput.value.toUpperCase();
  console.log(upperCase);
});
