import React from 'react';
import Popup from 'reactjs-popup';
import './Modal.css';


function Modal() {
  return (
    <Popup trigger=
      {<button>Play</button>} 
      modal nested>
      { close => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="content">
            <button>Single Player</button>
            <button>Multiplayer</button>
          </div>
        </div>
      )}
    </Popup>
  )
}

export default Modal;
