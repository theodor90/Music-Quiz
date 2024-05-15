import React from "react";
import { Link } from "react-router-dom";

function GameMode() {
  return (
    <>
        <Link to="/gamepage">
            <button className="btn btn-secondary">Single Player</button>
        </Link>
        <button className="btn btn-secondary" disabled>Multiplayer</button>
    </>
  )
}

export default GameMode;
