import "./Item.css";

export default function Item({ item, index }) {
  console.log("hello world");
  return (
    <li className="item">
      <input type="checkbox" name={item} value={item} id={item} />
      <label htmlFor={item}>{item}</label>
    </li>
  );
}
