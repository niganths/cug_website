import React from "react";
import "./Navbar.css";
import Logo from "../../assets/gifs/cuglogo.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header>
      <nav className="nav">
        <img src={Logo} alt="Cug Logo"></img>

        <ul className="nav__menu">
          <li className="nav__item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav__item">
            <Link to="/events">Events</Link>
          </li>
          <li className="nav__item">
            <Link to="/roadmap">Roadmap</Link>
          </li>
          <li className="nav__item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav__item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
