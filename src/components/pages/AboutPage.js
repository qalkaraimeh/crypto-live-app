import React from "react";
import "./AboutPage.css";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="container">
        <h1 className="about-heading">About This Project</h1>
        <p className="about-text">
          This crypto Project was Developed by{" "}
          <Link to="https://www.linkedin.com/in/qutaibah-alkaraimeh-58aba0199">
            <span>Qutaibah Alkaraimeh </span>
          </Link>
          as a way to practice using crypto API, all crypto data is powered by
          <Link to="https://www.coingecko.com/">
            <span> CoinGecko</span>
          </Link>
          , this is is the initial release, and will be improved over Time,
          thank you.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
