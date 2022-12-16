import React from "react";
import Modal from "react-bootstrap/Modal";
import { Dropdown } from "semantic-ui-react";
import "../styles/style.css";

/**
 * This function returns the Start Page component
 *
 * @param {boolean} { isVisible } - Value to show or Hide Start Page
 * @param {function} { playerModeVerification } - Function for verify player mode is selected or not
 * @param {function} { assignPlayerMode } - Set Player Mode (One player or Two Player)
 *
 * @return {component} - Start Page of Game
 */
function StartPage({ isVisible, playerModeVerification, assignPlayerMode }) {
  const option = [
    { key: 1, text: "One Player", value: "One" },
    { key: 2, text: "Two Player", value: "Two" },
  ];

  return (
    <Modal
      show={isVisible}
      backdrop="static"
      size="md"
      animation={false}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="heading">Tic Tac Toe</div>
        <div className="start-message">
          <div>Eager to Start!!</div>
          <div>Select mode and Conquer the game✨</div>
        </div>
        <label className="label-message">Select the Mode : </label>
        <Dropdown
          placeholder="Playing Mode"
          options={option}
          selection
          onChange={(event, result) => {
            assignPlayerMode(result.value);
          }}
        />
        <div
          className="restart-button start-button"
          onClick={playerModeVerification}
        >
          Start the Game
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default StartPage;
