import React from "react";

import "./header.css";

function Header({ score }) {
  return (
    <header className="header">
      <div className="header__title">
        <p>Rock</p>
        <p>Paper</p>
        <p>Scissors</p>
      </div>
      <div className="header__score-box">
        <p>score</p>
        <p className="header__score">{score}</p>
      </div>
    </header>
  );
}

export default Header;
