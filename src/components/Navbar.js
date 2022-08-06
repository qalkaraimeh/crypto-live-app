import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [active, setActive] = useState(false);
  const [menuClosed, setMenuCLosed] = useState(true);

  const toggleActive = () => {
    setActive(!active);
    setMenuCLosed(!menuClosed);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <h1>Crypto Prices</h1>
        </Link>
      </div>
      <ul
        className={
          active === true
            ? "nav-menu active"
            : menuClosed === true
            ? "nav-menu closed"
            : "nav-menu"
        }
      >
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={toggleActive}>
        {active ? <FaTimes size={28} /> : <FaBars size={28} />}
      </div>
    </nav>
  );
};

export default Navbar;
