import React, { useEffect, useState } from "react";
import "./result.css";

import rock from "../../assets/icon-rock.svg";
import paper from "../../assets/icon-paper.svg";
import scissors from "../../assets/icon-scissors.svg";

function Result({ playerChoice, setScore, handlePageNavigation }) {
  const [computerChoice, setComputerChoice] = useState("");
  const [playerResult, setPlayerResult] = useState("");

  const images = {
    rock: rock,
    paper: paper,
    scissors: scissors,
  };

  const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    setComputerChoice(choices[randomIndex]);
  };

  useEffect(() => {
    getComputerChoice();
  }, []);

  const getWinner = () => {
    if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")
    ) {
      setPlayerResult("win");
      setScore(prevScore => prevScore + 1);
    } else if (
      (computerChoice === "rock" && playerChoice === "scissors") ||
      (computerChoice === "scissors" && playerChoice === "paper") ||
      (computerChoice === "paper" && playerChoice === "rock")
    ) {
      setPlayerResult("lose");
      setScore(prevScore => prevScore - 1);
    } else {
      setPlayerResult("tie");
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      getWinner();
    }, 2000);

    return () => clearTimeout(timeout);
  }, [computerChoice]);

  return (
    <section className="result__container">
      <div className="result__choice player-choice">
        <p className="result__text">you picked</p>
        <div className={`icon ${playerChoice}-container ${playerResult}`}>
          <img src={images[playerChoice]} alt="" />
        </div>
      </div>

      <div className="result__summary">
        {playerResult === "win" && <p>you win</p>}
        {playerResult === "lose" && <p>you lose</p>}
        {playerResult === "tie" && <p>you tie</p>}
        <button
          onClick={() => {
            setComputerChoice();
            handlePageNavigation();
          }}
          className="play_again">
          play again
        </button>
      </div>

      <div className="result__choice computer-choice">
        <p className="result__text">The house picked</p>
        <div
          className={`icon ${computerChoice}-container ${
            playerResult === "win" || playerResult === "tie"
              ? ""
              : playerResult === "lose"
              ? "win"
              : ""
          }`}>
          <img src={images[computerChoice]} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Result;
