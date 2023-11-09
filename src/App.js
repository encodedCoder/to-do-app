import AddNewItem from "./components/AddNewItem";
import ItemsList from "./components/ItemsList";
import StatusBar from "./components/StatusBar";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [renderList, setRenderList] = useState("all");
  const [taskCount, setTasksCount] = useState(0);

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const changeActiveStatus = (index, status) => {
    console.log("Changing active status", index, status);
    items[index][1] = status;
    setItems(items);
    console.log(items);
  };

  useEffect(() => {
    // action on update of items
  }, [items]);

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Things to do</h1>
        <AddNewItem items={items} setItems={setItems} />
        <ItemsList
          items={items}
          renderList={renderList}
          setTasksCount={setTasksCount}
          removeItem={removeItem}
          changeActiveStatus={changeActiveStatus}
        />
        <StatusBar renderList={renderList} setRenderList={setRenderList} />
      </div>
    </div>
  );
}

export default App;
