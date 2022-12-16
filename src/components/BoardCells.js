import React from "react";
import "../styles/style.css";

/**
 * This function returns a component cell for board
 *
 * @param {string} { value } - Value X or O
 * @param {function} { chooseSquare } - Function to place value on board cell
 *
 * @return {component} - Returns cell for board
 */
function BoardCells({ value, chooseSquare }) {
  return (
    <div className="board-cell" onClick={chooseSquare}>
      {value}
    </div>
  );
}

export default BoardCells;
