import React from "react";
import { Link } from "react-router-dom";

function GameEnd(score) {
  return (
    <>
        <h3>Score: {score}</h3>
        <Link to="/gamepage">
            <button className="btn btn-secondary">Play Again</button>
        </Link>
    </>
  )
}

export default GameEnd;
