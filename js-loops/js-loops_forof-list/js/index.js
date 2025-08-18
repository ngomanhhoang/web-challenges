console.clear();

const main = document.querySelector('[data-js="main"]');

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write or modify code below this line --v--
for (const language of programmingLanguages) {
  const list = document.createElement("li")
  list.textContent = language
  ol.append(list)
}
// --^-- write or modify code above this line --^--
