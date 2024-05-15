import React from "react";
import Popup from "reactjs-popup";
import "./Modal.css";
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
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="content">
            <Link to="/gamepage">
              <button>Single Player</button>
            </Link>
            <button disabled>Multiplayer</button>
          </div>
        </div>
      )}
    </Popup>
  );
}

export default Modal;
