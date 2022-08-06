import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>
            Data provided by{" "}
            <Link to="https://www.coingecko.com/">
              <span>CoinGecko</span>{" "}
            </Link>
          </p>
          <p>
            Developed by{" "}
            <Link to="https://www.linkedin.com/in/qutaibah-alkaraimeh-58aba0199">
              <span>Qutaibah Alkaraimeh</span>
            </Link>
          </p>
          <div className="social-links">
            <Link to="https://www.linkedin.com/in/qutaibah-alkaraimeh-58aba0199">
              <FaLinkedin size={24} />
            </Link>
            <Link to="https://github.com/qalkaraimeh">
              <FaGithub size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
