import "./Item.css";
import { useState } from "react";

export default function Item({ item, index, key, removeItem }) {
  const [checkedCheckbox, setCheckedCheckbox] = useState(false);
  const checkBoxBlank = "./images/checkboxes/checkbox-blank.png";
  const checkBoxChecked = "./images/checkboxes/checkbox-checked.png";
  const [imgSrc, setImageSrc] = useState(checkBoxBlank);
  const [isActiveTask, setActiveTask] = useState(true);

  const handleTaskActive = (event) => {
    setActiveTask(!isActiveTask);
  };

  const handleMouseDownOnTask = (event) => {
    checkedCheckbox ? setImageSrc(checkBoxBlank) : setImageSrc(checkBoxChecked);
    setCheckedCheckbox(!checkedCheckbox);
    // console.log(checkedCheckbox);
  };

  const handleOnMouseOver = (event) => {
    event.target.style.cursor = "pointer";
  };

  const removeItemFromList = (event) => {
    console.log(index);
    removeItem(index);
  };

  return (
    <>
      <div className="task-container">
        <div
          className="task-name"
          onMouseDown={handleMouseDownOnTask}
          onMouseOver={handleOnMouseOver}
        >
          <img className="checkbox-image" src={imgSrc} alt="checkbox"></img>
          <span class={"complete"}>{item}</span>
        </div>
        <div className="task-delete" onMouseDown={removeItemFromList}>
          <div className="task-delete-img-container">
            <img src="./images/trash-bin.png" alt="trash-bin"></img>
          </div>
        </div>
      </div>
    </>
  );
}
