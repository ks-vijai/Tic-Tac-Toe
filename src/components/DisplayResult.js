import React from "react";
import Modal from "react-bootstrap/Modal";
import "../styles/style.css";

function DisplayResult({ show, message, title, textColor }) {
  let refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <>
      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        className="modal-popup"
      >
        <Modal.Header>
          <div className="modal-title" style={{ color: textColor }}>
            {title}
          </div>
        </Modal.Header>
        <div className="modal-body">{message}</div>
        <div>
          <div className="restart-button" onClick={refreshPage}>
            Restart the Game
          </div>
        </div>
      </Modal>
    </>
  );
}

export default DisplayResult;
