import { useState } from "react";
import AddNewItem from "./components/AddNewItem";
import ItemsList from "./components/ItemsList";

function App() {
  const [items, setItems] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Things to do</h1>
        <AddNewItem items={items} updateItemsList={setItems} />
        <ItemsList items={items} />
      </header>
    </div>
  );
}

export default App;
