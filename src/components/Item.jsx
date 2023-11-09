import "./Item.css";
import { useState } from "react";

export default function Item({ item, index, removeItem, changeActiveStatus }) {
  const [checkedCheckbox, setCheckedCheckbox] = useState(false);
  const checkBoxBlank = "./images/checkboxes/checkbox-blank.png";
  const checkBoxChecked = "./images/checkboxes/checkbox-checked.png";
  const [imgSrc, setImageSrc] = useState(checkBoxBlank);
  const [isTaskActive, setTaskActive] = useState(true);

  const changeTaskStatus = () => {
    // console.log(index);
    // return;
    isTaskActive
      ? changeActiveStatus(index, "complete")
      : changeActiveStatus(index, "active");
    setTaskActive(!isTaskActive);
  };

  const handleMouseDownOnTask = (event) => {
    changeTaskStatus();
    checkedCheckbox ? setImageSrc(checkBoxBlank) : setImageSrc(checkBoxChecked);
    setCheckedCheckbox(!checkedCheckbox);
  };

  const handleOnMouseOver = (event) => {
    event.target.style.cursor = "pointer";
  };

  const removeItemFromList = (event) => {
    removeItem(index);
  };

  return (
    <>
      <div className="task-container">
        <div
          className={isTaskActive ? "task-name-active" : "task-name-complete"}
          onMouseDown={handleMouseDownOnTask}
          onMouseOver={handleOnMouseOver}
        >
          <img className="checkbox-image" src={imgSrc} alt="checkbox"></img>
          <span className={"task-name-text"}>{item}</span>
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
