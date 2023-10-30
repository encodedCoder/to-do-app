import "./App.css";
import AddItem from "./components/AddItem";

const items = ["Task-1", "Task-2", "Task-3", "Task-4"];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Things to do</h1>
        <AddItem />
        {items.map((item, i) => {
          console.log(item);
          return <input type="checkbox" name={item} value={item} key={i} />;
        })}
      </header>
    </div>
  );
}

export default App;
