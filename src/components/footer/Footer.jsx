import React, { useState } from "react";
import "./footer.css";
import rule from "../../assets/image-rules.svg";
import { FaTimes } from "react-icons/fa";
function Footer() {
  const [showRule, setShowRule] = useState(false);
  const toggleRule = () => {
    setShowRule(!showRule);
  };

  return (
    <footer className="footer">
      <button className="footer__rules-btn" onClick={toggleRule}>
        Rules
      </button>

      {showRule && (
        <div className="rule">
          <div className="rule__title">
            <p className="rule__text">rules</p>
            <FaTimes onClick={toggleRule} size={30} color="lightgray" className="cancel" />
          </div>
          <img src={rule} alt="" className="rule__img" />
        </div>
      )}
    </footer>
  );
}

export default Footer;
