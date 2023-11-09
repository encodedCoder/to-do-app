import Item from "./Item";
import "./ItemsList.css";

export default function ItemsList({
  items,
  renderList,
  setTasksCount,
  removeItem,
  changeActiveStatus,
}) {
  // console.log(items);
  return (
    <div className="items-list">
      {items.map((item, index) => {
        return (
          <Item
            className="item"
            item={item[0]}
            index={index}
            removeItem={removeItem}
            changeActiveStatus={changeActiveStatus}
            key={index}
          />
        );
      })}
    </div>
  );
}
