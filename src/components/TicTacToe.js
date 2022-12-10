import "../styles/style.css";
import React from "react";
import MainBoard from "./MainBoard";

function TicTacToe() {
  return (
    <div>
      <div className="heading">Tic Tak Toe</div>
      <MainBoard />
    </div>
  );
}

export default TicTacToe;
