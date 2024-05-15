import React from "react";
import Popup from "reactjs-popup";
import "./Modal.css";

function Modal(page) {
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
            <page.content />
          </div>
        </div>
      )}
    </Popup>
  );
}

export default Modal;
