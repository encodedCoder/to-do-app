import "./Item.css";
import { useState } from "react";

export default function Item({ item, index }) {
  let checkedCheckbox = false;
  const checkBoxBlank = "./images/checkboxes/checkbox-blank.png";
  const checkBoxChecked = "./images/checkboxes/checkbox-checked.png";
  const [imgSrc, setImageSrc] = useState(checkBoxBlank);

  let handleMouseDown = (event) => {
    checkedCheckbox ? setImageSrc(checkBoxBlank) : setImageSrc(checkBoxChecked);
    checkedCheckbox = checkedCheckbox ? false : true;
    console.log("Mouse button pressed");
    setImageSrc(checkBoxChecked);
  };

  let handleOnMouseOver = (event) => {
    event.target.style.cursor = "pointer";
  };
  return (
    <div
      className="item"
      onMouseDown={handleMouseDown}
      onMouseOver={handleOnMouseOver}
    >
      <img src={imgSrc} alt="checkbox"></img>
      <span>{item}</span>
      <img src="./images/trash-bin.png" alt="trash-bin"></img>
      <hr></hr>
    </div>
  );
}
