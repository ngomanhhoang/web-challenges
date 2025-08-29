import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1, name: "Apple", color: "Red" },
    { id: 2, name: "Banana", color: "Yellow" },
    { id: 3, name: "Orange", color: "Orange" },
    { id: 4, name: "Grapes", color: "Purple" },
    { id: 5, name: "Kiwi", color: "Green" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color}/>
      ))}
    </div>
  );
}
