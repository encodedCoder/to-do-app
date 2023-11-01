import "./AddNewItem.css";

export default function AddNewItem(item) {
  return (
    <div className="add-item-input">
      {/* <input type="text"></input> */}
      <input
        type="text"
        name=""
        placeholder="Add New"
        onChange={() => ""}
        onKeyUp={() => ""}
      />
    </div>
  );
}
