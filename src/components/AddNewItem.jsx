import "./AddNewItem.css";

export default function AddNewItem({
  items,
  updateItemsList,
  listItemsCount,
  setListItemsCount,
}) {
  function handleKeyPress(event) {
    let item = event.target.value.trim().replace(/\s+/g, " ");
    if (event.key === "Enter") {
      if (item === "" || items.includes(item)) {
        event.target.value = "";
        return;
      }
      for (let i = 0; i < items.length; i++) {
        if (items[i][0] === item) return;
      }
      updateItemsList([...items, [item, "active"]]);
      event.target.value = "";
    }
  }

  return (
    <div className="add-item-input">
      <input
        type="text"
        name=""
        placeholder="Add New"
        onChange={() => ""}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
}
