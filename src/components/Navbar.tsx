import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/img/logo.png";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Mapt Logo" className="navbar-logo" />
      </div>
      <div className="navbar-right">
        <NavLink
          to="/"
          end
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          Home
        </NavLink>
        <NavLink
          to="/problem"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          The Problem
        </NavLink>
        <NavLink
          to="/solution"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          The Solution
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          About Us
        </NavLink>
        <NavLink
          to="/join-waitlist"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          Join the Waitlist
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
