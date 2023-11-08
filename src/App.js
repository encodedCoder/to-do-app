import AddNewItem from "./components/AddNewItem";
import ItemsList from "./components/ItemsList";
import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [renderList, setRenderList] = useState("all");
  const [taskCount, setTasksCount] = useState(0);

  const renderListHandler = (renderList) => {
    setRenderList(renderList);
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Things to do</h1>
        <AddNewItem items={items} updateItemsList={setItems} />
        <ItemsList
          items={items}
          renderList={renderList}
          setTasksCount={setTasksCount}
          removeItem={removeItem}
        />
      </div>
      <footer className="footer">
        <div className="footer-buttons">
          <button
            className="button"
            onMouseDown={renderListHandler.bind("all")}
          >
            All
          </button>
          <button
            className="button"
            onMouseDown={renderListHandler.bind("incomplete")}
          >
            Active
          </button>
          <button
            className="button"
            onMouseDown={renderListHandler.bind("complete")}
          >
            Completed
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
