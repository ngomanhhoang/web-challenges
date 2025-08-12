console.clear();

/*
Update the content and style of the page based on the current day and time.

- Write a function `getGreeting` that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: You can get the current hour with `new Date().getHours()`)

- Write a function `getDayColor` that returns a different color depending on the current weekday:
  - Monday: "darkgray"
  - Tuesday - Friday: "lightblue"
  - Saturday - Sunday: "hotpink"

(HINT: You can get the current weekday with `new Date().getDay()`)

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  // Code here
  let hour = new Date().getHours()
  if(hour >= 6 && hour <= 12) {
    return "Good Morning"
  } else if(hour >= 13 && hour <= 18) {
    return "Good Afternoon"
  } else if(hour >= 19 && hour <= 22) {
    return "Good Evening"
  }else {
    return "Good Night"
  }
}

function getDayColor() {
  // Code here
  let day = new Date().getDay()
  if(day === 1) {
    return "darkgray"
  } else if(day === 2 || day === 3 || day === 4 || day === 5) {
    return "lightblue"
  }else {
    return "hotpink"
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
