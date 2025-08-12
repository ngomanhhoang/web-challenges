console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  
  e.target.firstName.focus();
  console.log(data);

  const ageBadness = Number(e.target.age.value) + Number(e.target.badness.value)
  console.log(`The age-badness-sum of ${e.target.firstName.value} is ${ageBadness}`)
  e.target.reset()
});
