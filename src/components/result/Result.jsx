import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Result({ playerChoice, setScore }) {
  const [computerChoice, setComputerChoice] = useState("");
  const [playerResult, setPlayerResult] = useState("");

  const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * choices.length);
    setComputerChoice(choices[index]);
  };

  useEffect(() => {
    getComputerChoice();
  }, []);

  const getWinner = () => {
    if (playerChoice === computerChoice) {
      setPlayerResult("tie");
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")
    ) {
      setScore(prevScore => prevScore + 1);
      setPlayerResult("win");
    } else {
      setScore(prevScore => prevScore - 1);
      setPlayerResult("lose");
    }
  };
  useEffect(() => {
    getWinner();
  }, [computerChoice]);

  return (
    <div>
      <p>You chose: {playerChoice}</p>
      <p>Computer chose: {computerChoice}</p>
      Result:
      {playerResult === "win" && <h2>you win</h2>}
      {playerResult === "tie" && <h2>you tie</h2>}
      {playerResult === "lose" && <h2>you lose</h2>}
      <Link to="/">Play again</Link>
    </div>
  );
}

export default Result;
