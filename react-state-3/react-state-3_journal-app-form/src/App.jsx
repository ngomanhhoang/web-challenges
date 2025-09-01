import { useState } from "react";
import "./App.css";
import EntriesSection from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { initialEntries } from "./components/EntriesSection";
import { uid } from "uid";

function App() {
  const [entries, setEntries] = useState(initialEntries);

  function handleAddEntry( newEntry ) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    const id = uid();
    const newEntryWithId = {...newEntry, id, date}
    setEntries([...entries, newEntryWithId])
  }
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm onAddEntry={handleAddEntry}/>
        <EntriesSection entries={entries} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
