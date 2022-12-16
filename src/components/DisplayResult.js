import React from "react";
import Modal from "react-bootstrap/Modal";
import "../styles/style.css";

/**
 * This function returns the modal component for displaying the result
 *
 * @param {boolean} { isVisible } - True or False value for page to visible
 * @param {string} { resultMessage } - Result Message
 * @param {string} { title } - Title of Result Message
 * @param {string} { textColor } - Color of the message
 * @param {string} { setBoard } - State function to change board value
 * @param {string} { setPage } - State function to change display of result page
 * @param {string} { setResult } - State function to change result details
 *
 * @return {component} - Returns a result modal
 */
function DisplayResult({
  isVisible,
  resultMessage,
  title,
  textColor,
  setBoard,
  setPage,
  setResult,
}) {
  /**
   * This function refreshes the window and resets all the data
   * @param {void} null parameters as input
   *
   * @return {void} - No return type
   */
  const refreshPage = () => {
    window.location.reload(false);
  };

  /**
   * This function resets the board,result values to default value
   * It also allows user to play the game again
   *
   * @param {void} null parameters as input
   *
   * @return {void} - No return type
   */
  const playAgain = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPage(false);
    setResult({ winner: "", state: "" });
  };

  return (
    <Modal
      show={isVisible}
      backdrop="static"
      keyboard={false}
      className="modal-popup"
    >
      <Modal.Header>
        <div className="modal-title" style={{ color: textColor }}>
          {title}
        </div>
      </Modal.Header>
      <div className="modal-body">{resultMessage}</div>
      <div className="result-buttons">
        <div className="restart-button play-again-button" onClick={playAgain}>
          Play again
        </div>
        <div className="restart-button" onClick={refreshPage}>
          Restart the Game
        </div>
      </div>
    </Modal>
  );
}

export default DisplayResult;
