import React, { useEffect, useState, useCallback } from "react";
import BoardCells from "./BoardCells";
import ReactConfetti from "react-confetti";
import DisplayResult from "./DisplayResult";
import StartPage from "./StartPage";
import ProfileCard from "./ProfileCard";

import "../styles/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * This function returns the main board component having all board cells
 *
 * @param {void} null parameters as input
 *
 * @return {component} - Board Component
 */
function MainBoard() {
  // useState variables

  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [playerValue, setPlayerValue] = useState("X");
  const [playerMode, setPlayerMode] = useState("");
  const [result, setResult] = useState({ winner: "", state: "" });
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [computerMode, setComputerMode] = useState(false);
  const [startPageVisible, setStartPageVisible] = useState(true);
  const [winningPage, setWinningPage] = useState(false);
  const [drawPage, setDrawPage] = useState(false);
  const [controlUseEffect, setControlUseEffect] = useState(false);
  const [secondPlayer, setSecondPlayer] = useState("O");

  /**
   * This function verifies the player mode is selected or not
   * It also show toast error message for invalid option
   *
   * @param {void} null parameters as input
   *
   * @return {void} - No return type
   */
  const playerModeVerification = () => {
    setControlUseEffect(!controlUseEffect);
    if (!playerMode) {
      toast.error("Please select the Game Mode");
    } else {
      setStartPageVisible(false);
      if (playerMode === "One") {
        setComputerMode(true);
        setSecondPlayer("Computer");
      }
    }
  };

  /**
   * This function updates the value of selected cell in board
   * In computer mode it automatically makes a move and updates in board
   *
   * @param {number} selectedIndex - Selected Cell of User
   *
   * @return {void} - No return type
   */
  const chooseAndUpdateSquare = (selectedIndex) => {
    if (!board[selectedIndex]) {
      let updatedBoard = board;
      updatedBoard[selectedIndex] = playerValue;
      setBoard([...updatedBoard]);

      if (playerValue === "X") {
        setPlayerValue("O");
      } else {
        setPlayerValue("X");
      }

      if (computerMode) {
        let emptySquares = board
          .map((square, index) => (square === "" ? index : ""))
          .filter((square) => square !== "");
        let randomIndex =
          emptySquares[Math.floor(Math.random() * emptySquares.length)];

        let updatedBoard = board;
        updatedBoard[randomIndex] = "O";
        setPlayerValue("X");
        setTimeout(() => {
          setBoard([...updatedBoard]);
        }, 300);
      }
    }
  };

  /**
   * This function checks for win and tie
   * It updates for result page for win and tie in game
   *
   * @param {void} null parameters as input
   *
   * @return {void} - No return type
   */
  const checkAndUpdateForWin = useCallback(() => {
    let isPlayerWon = false;
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

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
        isPlayerWon = true;
        setResult({ winner: firstPlayer, state: "Won" });
        setWinningPage(true);
        if (firstPlayer === "X") {
          setPlayerOneScore(playerOneScore + 1);
        } else {
          setPlayerTwoScore(playerTwoScore + 1);
        }
        return;
      }
    });

    if (!isPlayerWon) {
      let allSquaresFilled = true;
      board.forEach((cell) => {
        if (cell === "") {
          allSquaresFilled = false;
        }
      });

      if (allSquaresFilled) {
        setResult({ winner: "", state: "Game Tied" });
        setDrawPage(true);
        setBoard(["", "", "", "", "", "", "", "", ""]);
      }
    }
  }, [board, playerOneScore, playerTwoScore]);

  // useEffect for checking winner and display winner result
  useEffect(() => {
    if (!(result.state && result.winner)) {
      checkAndUpdateForWin();
    }
  }, [board, result, checkAndUpdateForWin]);

  return (
    <React.Fragment>
      <div className="main-board">
        <StartPage
          isVisible={startPageVisible}
          playerModeVerification={playerModeVerification}
          assignPlayerMode={setPlayerMode}
        />
        <React.Fragment>
          <DisplayResult
            isVisible={winningPage}
            title={"Congratulations"}
            textColor={"lightgreen"}
            resultMessage={`Player ${result.winner} Won the game`}
            setBoard={setBoard}
            setPage={setWinningPage}
            setResult={setResult}
          />
          {winningPage && (
            <ReactConfetti
              width={window.innerWidth}
              height={window.innerHeight}
            />
          )}
        </React.Fragment>
        <DisplayResult
          isVisible={drawPage}
          textColor={"brown"}
          title={"Game Ended"}
          resultMessage={`Game Tied`}
          setBoard={setBoard}
          setPage={setDrawPage}
          setResult={setResult}
        />
        <ProfileCard playerName={"X"} playerScore={playerOneScore} />
        <div className="board-layout">
          <BoardCells
            value={board[0]}
            chooseSquare={() => {
              chooseAndUpdateSquare(0);
            }}
          />
          <BoardCells
            value={board[1]}
            chooseSquare={() => {
              chooseAndUpdateSquare(1);
            }}
          />
          <BoardCells
            value={board[2]}
            chooseSquare={() => {
              chooseAndUpdateSquare(2);
            }}
          />
          <BoardCells
            value={board[3]}
            chooseSquare={() => {
              chooseAndUpdateSquare(3);
            }}
          />
          <BoardCells
            value={board[4]}
            chooseSquare={() => {
              chooseAndUpdateSquare(4);
            }}
          />
          <BoardCells
            value={board[5]}
            chooseSquare={() => {
              chooseAndUpdateSquare(5);
            }}
          />
          <BoardCells
            value={board[6]}
            chooseSquare={() => {
              chooseAndUpdateSquare(6);
            }}
          />
          <BoardCells
            value={board[7]}
            chooseSquare={() => {
              chooseAndUpdateSquare(7);
            }}
          />
          <BoardCells
            value={board[8]}
            chooseSquare={() => {
              chooseAndUpdateSquare(8);
            }}
          />
        </div>
        <ProfileCard playerName={secondPlayer} playerScore={playerTwoScore} />
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </React.Fragment>
  );
}

export default MainBoard;
