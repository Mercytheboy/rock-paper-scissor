import React from "react";
import { Link } from "react-router-dom";

function Result({
  playerChoice,
  computerChoice,
  playerResult,
}) {

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
