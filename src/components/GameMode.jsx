import React from "react";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import "./GameMode.css";

const overlayStyle = { backdropFilter: "blur(3px)" };

function GameMode() {
  return (
    <Popup
      trigger={
        <button className="btn button-center btn-secondary">Play</button>
      }
      modal
      nested
      {...{ overlayStyle }}
    >
      {(close) => (
        <div className="gamemode-container">
          <button className="btn-close" onClick={close}>
            &times;
          </button>
          <div className="gamemode-content">
            <Link to="/gamepage">
              <button className="btn btn-secondary">Single Player</button>
            </Link>
            <button className="btn btn-secondary" disabled>
              Multiplayer
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}

export default GameMode;
