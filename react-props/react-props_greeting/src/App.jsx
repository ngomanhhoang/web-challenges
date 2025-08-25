export default function App() {
  return <Greeting name={"Gimena"} />
}

function Greeting({name}) {
  return <h1>{name === "Gimena" ? "Hello Coach" : `Hello ${name}`} !</h1>
}