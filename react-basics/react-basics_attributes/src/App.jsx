import "./styles.css";

export default function App() {
  return Article()
}

function Article() {
  return <article>
    <h2 className="article__title">Wikipedia</h2>
    <label htmlFor="search">Type your idee: </label>
    <input type="text" id="search" />
    <a href="https://www.wikipedia.org/" className="article__link">Click here !!</a>
  </article>
}
