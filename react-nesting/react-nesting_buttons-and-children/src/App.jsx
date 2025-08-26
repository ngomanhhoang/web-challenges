import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Cat</Button>
      <Button>Dog</Button>
      <Button>Rabbit</Button>
      <Button>Chicken</Button>
    </main>
  );
}

function Button({children}) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
