import React from "react";

function Game({setPlayerChoice, handlePageNavigation }) {
  return (
    <div>
      <div
        onClick={() => {
          setPlayerChoice("rock");
          handlePageNavigation();
        }}>
        rock
      </div>
      <div
        onClick={() => {
          setPlayerChoice("paper");
          handlePageNavigation();
        }}>
        paper
      </div>
      <div
        onClick={() => {
          setPlayerChoice("scissors");
          handlePageNavigation();
        }}>
        scissors
      </div>
    </div>
  );
}

export default Game;
