import React from "react";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import "./EndGame.css";

const overlayStyle = { backdropFilter: "blur(3px)" };

const refreshPage = () => {
  window.location.reload();
};

function EndGame(props) {
  return (
    <Popup
      trigger={
        <button
          className="btn btn-secondary"
          style={{ visibility: props.show ? "visible" : "hidden" }}
        >
          Game Finished!
        </button>
      }
      modal
      nested
      {...{ overlayStyle }}
    >
      {(close) => (
        <div className="gameend-container">
          <button className="btn-close" onClick={close}>
            &times;
          </button>
          <h3>Score: {props.value}</h3>
          <div className="gameend-content">
            <Link to="/gamepage">
              <button
                className="btn btn-secondary"
                onClick={() => {
                  close();
                  refreshPage();
                }}
              >
                Play Again
              </button>
            </Link>
            <Link to="/">
              <button
                className="btn btn-secondary"
                onClick={() => {
                  close();
                }}
              >
                Home
              </button>
            </Link>
          </div>
        </div>
      )}
    </Popup>
  );
}

export default EndGame;