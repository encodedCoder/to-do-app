import Item from "./Item";
import "./ItemsList.css";

export default function ItemsList({ items }) {
  // console.log(items);
  <ul className="items-list">
    {items.map((item, index) => {
      return <Item item={item} index={index} key={index} />;
    })}
  </ul>;
}
