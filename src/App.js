import "./App.css";
import AddNewItem from "./components/AddNewItem";
// import Item from "./components/Item";
import ItemsList from "./components/ItemsList";

const items = ["Task-1", "Task-2", "Task-3", "Task-4"];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Things to do</h1>
        {/* Hello World */}
        <AddNewItem />
        <ItemsList items={items} />
        {/* <Item /> */}
      </header>
    </div>
  );
}

export default App;
