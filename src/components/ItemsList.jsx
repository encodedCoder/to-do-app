import Item from "./Item";
import "./ItemsList.css";

export default function ItemsList({ items, renderList }) {
  return (
    <div className="items-list">
      {items.map((item, index) => {
        return item[1] === "active" ? (
          <Item className="item" item={item[0]} key={index} />
        ) : null;
      })}
    </div>
  );
}
