import AddNewItem from "./components/AddNewItem";
import ItemsList from "./components/ItemsList";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [renderList, setRenderList] = useState("all");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Things to do</h1>
        <AddNewItem items={items} updateItemsList={setItems} />
        <ItemsList items={items} renderList={renderList} />
      </header>
      <footer className="App-footer">
        {/* <div>{renderList === "all" ? null : null}</div>
        <div>{renderList === "incomplete" ? () => null : null}</div>
        <div>{renderList === "complete" ? () => null : null}</div> */}
        {/* <button className="button" onMouseDown={setRenderList("all")}>
          All
        </button>
        <button className="button" onMouseDown={setRenderList("incomplete")}>
          Active
        </button>
        <button className="button" onMouseDown={setRenderList("complete")}>
          Completed
        </button> */}
      </footer>
    </div>
  );
}

export default App;
