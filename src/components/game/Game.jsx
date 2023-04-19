import React, { useEffect, useState } from "react";

function Game({
  playerChoice,
  setPlayerChoice,
  computerChoice,
  setComputerChoice,
  setPlayerResult,
  score,
  setScore,
}) {
  const [userChoice, setUserChoice] = useState("");

  const setChoice = choice => {
    setPlayerChoice(choice);
    console.log(`init ${choice}`);
  };

  // console.log(`player chose = ${playerChoice}`);
  // console.log(`computer chose ${computerChoice}`);

  const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * choices.length);
    setComputerChoice(choices[index]);
  };

  useEffect(() => {
    setComputerChoice("");
    getComputerChoice();
  }, [userChoice]);

  const getWinner = () => {
    console.log(`user chose = ${userChoice}`);
    console.log(`computer chose ${computerChoice}`);
    setPlayerChoice(userChoice);
    console.log(`player chose = ${playerChoice}`);

    // getComputerChoice();
    if (userChoice === computerChoice) {
      setScore(score);
      setPlayerResult("tie");
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "rock")
    ) {
      setScore(score + 1);
      setPlayerResult("win");
    } else {
      setScore(score - 1);
      setPlayerResult("lose");
    }
  };

  console.log(`i chose ${userChoice}`);
  return (
    <div>
      <div
        data-id="rock"
        onClick={() => {
          setChoice("rock");
          setUserChoice("rock");
          getWinner();
        }}>
        rock
      </div>

      <div
        data-id="paper"
        onClick={() => {
          setChoice("paper");
          setUserChoice("paper");
          getWinner();
        }}>
        paper
      </div>

      <div
        data-id="scissors"
        onClick={() => {
          setChoice("scissors");
          setUserChoice("scissors");
          getWinner();
        }}>
        scissors
      </div>
    </div>
  );
}

export default Game;
