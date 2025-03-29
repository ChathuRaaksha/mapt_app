import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/img/logo.png";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to close menu when a link is clicked
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Mapt Logo" className="navbar-logo" />
      </div>

      {/* Hamburger Menu Button */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Navbar Links */}
      <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/problem" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} onClick={closeMenu}>
          The Problem
        </NavLink>
        <NavLink to="/solution" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} onClick={closeMenu}>
          The Solution
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} onClick={closeMenu}>
          About Us
        </NavLink>
        <NavLink to="/join-waitlist" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} onClick={closeMenu}>
          Join the Waitlist
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
