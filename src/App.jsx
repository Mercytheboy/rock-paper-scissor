import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Game from "./components/game/Game";
import Result from "./components/result/Result";
import Footer from "./components/footer/Footer";
import "./app.css";

function App() {
  const [score, setScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState("");
  const [playerResult, setPlayerResult] = useState("");
  const [computerChoice, setComputerChoice] = useState("");

  return (
    <>
      <Header score={score} />

      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Game
                playerChoice={playerChoice}
                setPlayerChoice={setPlayerChoice}
                setPlayerResult={setPlayerResult}
                setComputerChoice={setComputerChoice}
                computerChoice={computerChoice}
                score={score}
                setScore={setScore}
              />
            }
          />

          <Route
            path="/result"
            element={
              <Result
                playerChoice={playerChoice}
                playerResult={playerResult}
                computerChoice={computerChoice}
              />
            }
          />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
