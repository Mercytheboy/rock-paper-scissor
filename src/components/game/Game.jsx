import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Game({ setPlayerChoice }) {
  const SetChoice = e => {
    setPlayerChoice(e.target.dataset.id);
  };

  return (
    <div>
      <Link to="/result">
        <div data-id="rock" onClick={SetChoice}>
          rock
        </div>
      </Link>

      <Link to="/result">
        <div data-id="paper" onClick={SetChoice}>
          paper
        </div>
      </Link>

      <Link to="/result">
        <div data-id="scissors" onClick={SetChoice}>
          scissors
        </div>
      </Link>
    </div>
  );
}

export default Game;
