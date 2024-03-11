import React from "react";
import "./Navbar.css";
import Logo from "../../assets/gifs/cuglogo.png"
function Navbar() {
  return (
    <header>
      <nav className="nav">
        <img src={Logo} alt="Cug Logo"></img>

        <ul className="nav__menu">
          <li className="nav__item">
            <a href="/" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="/" className="nav__link">
              Events
            </a>
          </li>
          <li className="nav__item">
            <a href="/" className="nav__link">
              Roadmap
            </a>
          </li>
          <li className="nav__item">
            <a href="/" className="nav__link">
              About
            </a>
          </li>
          <li className="nav__item">
            <a href="/" className="nav__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
