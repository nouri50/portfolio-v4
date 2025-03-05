import React, { useState } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "../image/logo.webp";
import "../Styles/global.css";

function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <img src={logo} alt="Logo" className="header-logo" />

        {/* Menu Desktop */}
        <nav className="header-nav">
          <ul>
            <li><Link to="accueil" smooth={true} duration={500}>{t("home")}</Link></li>
            <li><Link to="parcours" smooth={true} duration={500}>{t("parcours")}</Link></li>
            <li><Link to="services" smooth={true} duration={500}>{t("myServices")}</Link></li>
            <li><Link to="projects" smooth={true} duration={500}>{t("projectsTitle")}</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>{t("contactTitle")}</Link></li>
          </ul>
        </nav>

        {/* Boutons de langue en desktop */}
        <div className="language-switcher-desktop">
          <LanguageSwitcher />
        </div>

        {/* Icône Menu Burger à l'extrémité droite */}
        <button className="burger-menu" aria-label="Ouvrir le menu" onClick={toggleMenu}>
          ☰
        </button>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <button className="close-menu" onClick={closeMenu}>✖</button>
            <ul>
              <li><Link to="accueil" smooth={true} duration={500} onClick={closeMenu}>{t("home")}</Link></li>
              <li><Link to="parcours" smooth={true} duration={500} onClick={closeMenu}>{t("parcours")}</Link></li>
              <li><Link to="services" smooth={true} duration={500} onClick={closeMenu}>{t("myServices")}</Link></li>
              <li><Link to="projects" smooth={true} duration={500} onClick={closeMenu}>{t("projectsTitle")}</Link></li>
              <li><Link to="contact" smooth={true} duration={500} onClick={closeMenu}>{t("contactTitle")}</Link></li>
            </ul>
            <div className="language-switcher-mobile">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
