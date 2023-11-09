import AddNewItem from "./components/AddNewItem";
import ItemsList from "./components/ItemsList";
import StatusBar from "./components/StatusBar";
import { useState } from "react";
import "./App.css";

const home = "/localhost";

function App() {
  const [items, setItems] = useState([]);
  const [renderList, setRenderList] = useState("all");

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const changeActiveStatus = (index, status) => {
    console.log("Changing active status", index, status);
    const newItems = [...items];
    newItems[index][1] = status;
    setItems(newItems);
    console.log(items);
  };

  const filteredItems = () => {
    if (renderList === "all") {
      return items;
    } else if (renderList === "active") {
      return items.filter((item) => item[1] === "active");
    } else {
      return items.filter((item) => item[1] === "complete");
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Things to do</h1>
        <StatusBar
          renderList={renderList}
          setRenderList={setRenderList}
          tasksCount={filteredItems().length}
        />
        <AddNewItem items={items} setItems={setItems} />
        <ItemsList
          items={filteredItems()}
          renderList={renderList}
          removeItem={removeItem}
          changeActiveStatus={changeActiveStatus}
        />
      </div>
    </div>
  );
}

export default App;
