import React, { useEffect, useState } from "react";

function Result({ playerChoice, setScore, handlePageNavigation }) {
  const [computerChoice, setComputerChoice] = useState("");
  const [playerResult, setPlayerResult] = useState("");

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
    getWinner();
  }, [computerChoice]);

  return (
    <div>
      <p>you chose: {playerChoice}</p>
      <p>computer chose: {computerChoice}</p>
      {playerResult === "win" && <p>you win</p>}
      {playerResult === "lose" && <p>you lose</p>}
      {playerResult === "tie" && <p>you tie</p>}

      <p onClick={() => handlePageNavigation()}>play again</p>
    </div>
  );
}

export default Result;
