console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--
  for (let i = 1; i <= 5; i++) {
    const img = document.createElement("img");
    img.src = "./assets/star-empty.svg";
    img.addEventListener("click", () => {
      renderStars(i);
    });

    starContainer.append(img);
    if (i <= filledStars) {
      img.src = "./assets/star-filled.svg";
    } else {
      img.src = "./assets/star-empty.svg";
    }
  }

  // --^-- write or modify code above this line --^--
}

renderStars();
