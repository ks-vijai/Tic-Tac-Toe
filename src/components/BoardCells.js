import React from "react";
import "../styles/style.css";

function BoardCells({ value, chooseSquare }) {
  return (
    <div className="board-cell" onClick={chooseSquare}>
      {value}
    </div>
  );
}

export default BoardCells;
