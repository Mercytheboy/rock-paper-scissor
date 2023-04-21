import React, { useState } from "react";
import Header from "./components/header/Header";
import Game from "./components/game/Game";
import Result from "./components/result/Result";
import Footer from "./components/footer/Footer";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./app.css";
function App() {
  const [score, setScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState("");

  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("page1");

  const handlePageNavigation = () => {
    if (currentPage === "page1") {
      setCurrentPage("page2");
      navigate("/result");
    } else {
      setCurrentPage("page1");
      navigate("/");
    }
  };

  return (
    <div>
      <Header score={score} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Game
              setPlayerChoice={setPlayerChoice}
              handlePageNavigation={handlePageNavigation}
            />
          }
        />
        <Route
          path="/result"
          element={
            <Result
              playerChoice={playerChoice}
              setScore={setScore}
              handlePageNavigation={handlePageNavigation}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
