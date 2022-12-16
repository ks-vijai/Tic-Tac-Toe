import "../styles/style.css";
import React from "react";
import MainBoard from "./MainBoard";

/**
 * This was the parent component containing heading and child components
 *
 * @return {component} - Main Component
 */
function TicTacToe() {
  return (
    <div>
      <div className="heading">Tic Tac Toe</div>
      <MainBoard />
    </div>
  );
}

export default TicTacToe;
