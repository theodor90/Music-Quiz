import React from "react";
import Popup from "reactjs-popup";
import "./Modal.css";

function HowToPlay() {
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
            <h1>How to play</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              reiciendis! Quo id expedita sequi quos cupiditate alias in
              voluptatum provident reprehenderit repudiandae nobis aperiam
              culpa, velit libero dolore. Ipsam, quod?
            </p>
          </div>
        </div>
      )}
    </Popup>
  );
}

export default HowToPlay;
