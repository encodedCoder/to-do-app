import "./AddNewItem.css";

export default function AddNewItem({ items, updateItemsList }) {
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      console.log("Enter key is pressed");
      items.push(event.target.value);
      event.target.value = "";
      updateItemsList(items);
      console.log(items);
    }
  }

  return (
    <div className="add-item-input">
      <input
        type="text"
        name=""
        placeholder="Add New"
        onChange={() => ""}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}
