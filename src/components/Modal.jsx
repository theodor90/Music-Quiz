import React from "react";
import Popup from "reactjs-popup";
import "./css/Modal.css";
import { Link } from "react-router-dom";

function Modal() {
  return (
    <Popup
      trigger={
        <button className="btn button-center btn-secondary">Play</button>
      }
      modal
      nested
    >
      {(close) => (
        <div className="modal-container">
          <button className="btn-close" onClick={close}>
            &times;
          </button>
          <div className="modal-content">
            <Link to="/gamepage">
              <button className="btn btn-secondary">Single Player</button>
            </Link>
            <button className="btn btn-secondary" disabled>Multiplayer</button>
          </div>
        </div>
      )}
    </Popup>
  );
}

export default Modal;
