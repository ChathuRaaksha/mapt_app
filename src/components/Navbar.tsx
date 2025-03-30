import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "../styles/Navbar.css";
import logo from "../assets/img/logo.png";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation(); // Get translation function and i18n instance

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Mapt Logo" className="navbar-logo" />
      </div>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </button>

      <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          onClick={closeMenu}
        >
          {t('home')}
        </NavLink>
        <NavLink
          to="/problem"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          onClick={closeMenu}
        >
          {t('the_problem')}
        </NavLink>
        <NavLink
          to="/solution"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          onClick={closeMenu}
        >
          {t('the_solution')}
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          onClick={closeMenu}
        >
          {t('about_us')}
        </NavLink>
        <NavLink
          to="/join-waitlist"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          onClick={closeMenu}
        >
          {t('join_waitlist')}
        </NavLink>

        {/* Language Switcher */}
        <div className="language-switcher">
          <span
            className={i18n.language === 'en' ? 'active' : ''}
            onClick={() => i18n.changeLanguage('en')}
          >
           EN
          </span>
          |
          <span
            className={i18n.language === 'sv' ? 'active' : ''}
            onClick={() => i18n.changeLanguage('sv')}
          >
            SV
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;