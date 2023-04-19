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

  return (
    <>
      <Header score={score} />

      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={<Game setPlayerChoice={setPlayerChoice} />}
          />

          <Route
            path="/result"
            element={<Result playerChoice={playerChoice} setScore={setScore} />}
          />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
