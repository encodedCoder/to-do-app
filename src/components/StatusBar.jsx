import "./StatusBar.css";

export default function StatusBar({ renderList, setRenderList }) {
  console.log("We're currently rendering: ", renderList);
  return (
    <div className="status-bar-container">
      <div className="status-bar-buttons">
        <button
          className={renderList === "all" ? "all-selected" : "all"}
          onMouseDown={() => {
            setRenderList("all");
          }}
        >
          All
        </button>
        <button
          className={renderList === "active" ? "active-selected" : "active"}
          onMouseDown={() => {
            setRenderList("active");
          }}
        >
          Active
        </button>
        <button
          className={
            renderList === "complete" ? "complete-selected" : "complete"
          }
          onMouseDown={() => {
            setRenderList("complete");
          }}
        >
          Completed
        </button>
      </div>
    </div>
  );
}
