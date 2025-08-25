export default function App() {
  return <Sum valueA={20} valueB={30}/>
}

function Sum({valueA, valueB}) {
  return valueA + valueB
}
