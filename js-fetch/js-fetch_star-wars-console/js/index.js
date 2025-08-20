console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  const objects = data.results;
  console.log(objects);
  const eyeColor = objects.filter((object) => object.name == "R2-D2");
  console.log(eyeColor[0].eye_color);
}
fetchData();
