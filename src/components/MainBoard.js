import React, { useEffect, useState } from "react";
import "../styles/style.css";
import BoardCells from "./BoardCells";
import ReactConfetti from "react-confetti";
import DisplayResult from "./DisplayResult";

function MainBoard() {
  let [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  let [playerValue, setPlayerValue] = useState("X");
  let [result, setResult] = useState({ winner: "", state: "" });

  let winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let chooseSquare = (selectedIndex) => {
    if (!board[selectedIndex]) {
      setBoard(
        board.map((value, index) => {
          if (index === selectedIndex && value === "") {
            return playerValue;
          }
          return value;
        })
      );

      if (playerValue === "X") {
        setPlayerValue("O");
      } else {
        setPlayerValue("X");
      }
    }
  };

  useEffect(() => {
    checkForTie();
    checkForWin();
  }, [board]);

  let checkForWin = () => {
    winningPatterns.forEach((currentPattern) => {
      let firstPlayer = board[currentPattern[0]];
      if (firstPlayer === "") return;
      let winningMoment = true;
      currentPattern.forEach((index) => {
        if (board[index] !== firstPlayer) {
          winningMoment = false;
        }
      });

      if (winningMoment) {
        setResult({ winner: firstPlayer, state: "Won" });
      }
    });
  };

  let checkForTie = () => {
    let allSquaresFilled = true;
    board.forEach((cell) => {
      if (cell === "") {
        allSquaresFilled = false;
      }
    });
    if (allSquaresFilled) {
      setResult({ winner: "", state: "Game Tied" });
    }
  };

  return (
    <div className="main-board">
      {(result.state && result.winner && (
        <React.Fragment>
          <DisplayResult
            show={true}
            title={"Congratulations"}
            textColor={"lightgreen"}
            message={`Player ${result.winner} Won the game`}
          />
          <ReactConfetti
            width={window.innerWidth}
            height={window.innerHeight}
          />
        </React.Fragment>
      )) ||
        (result.state && (
          <DisplayResult
            show={true}
            textColor={"brown"}
            title={"Game Ended"}
            message={`Game Tied`}
          />
        ))}
      <div className="board-layout">
        <BoardCells
          value={board[0]}
          chooseSquare={() => {
            chooseSquare(0);
          }}
        />
        <BoardCells
          value={board[1]}
          chooseSquare={() => {
            chooseSquare(1);
          }}
        />
        <BoardCells
          value={board[2]}
          chooseSquare={() => {
            chooseSquare(2);
          }}
        />
        <BoardCells
          value={board[3]}
          chooseSquare={() => {
            chooseSquare(3);
          }}
        />
        <BoardCells
          value={board[4]}
          chooseSquare={() => {
            chooseSquare(4);
          }}
        />
        <BoardCells
          value={board[5]}
          chooseSquare={() => {
            chooseSquare(5);
          }}
        />
        <BoardCells
          value={board[6]}
          chooseSquare={() => {
            chooseSquare(6);
          }}
        />
        <BoardCells
          value={board[7]}
          chooseSquare={() => {
            chooseSquare(7);
          }}
        />
        <BoardCells
          value={board[8]}
          chooseSquare={() => {
            chooseSquare(8);
          }}
        />
      </div>
    </div>
  );
}

export default MainBoard;
