import React from "react";
import "./game.css";
import triangle from "../../assets/bg-triangle.svg";
import rock from "../../assets/icon-rock.svg";
import paper from "../../assets/icon-paper.svg";
import scissors from "../../assets/icon-scissors.svg";

function Game({ setPlayerChoice, handlePageNavigation }) {
  return (
    <section className="game">
      <img src={triangle} alt="" className="triangle" />
      <div className="game__icons">
        <div
          onClick={() => {
            setPlayerChoice("rock");
            handlePageNavigation();
          }}
          className="icon rock-container">
          <img src={rock} alt="" />
        </div>
        <div
          onClick={() => {
            setPlayerChoice("paper");
            handlePageNavigation();
          }}
          className="icon paper-container">
          <img src={paper} alt="" />
        </div>
        <div
          onClick={() => {
            setPlayerChoice("scissors");
            handlePageNavigation();
          }}
          className="icon scissors-container">
          <img src={scissors} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Game;
