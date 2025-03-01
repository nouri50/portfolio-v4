import React, { useState } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import logo from "../image/logo.webp";
import LanguageSwitcher from "./LanguageSwitcher";

function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="Logo Nouri Morouche" className="header-logo" />

        {/* ✅ Menu burger pour mobile */}
        <button className="burger-menu" aria-label="Ouvrir le menu" onClick={toggleMenu}>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>

        {/* ✅ Navigation principale */}
        <nav className={`header-nav ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="accueil" smooth={true} duration={500} spy={true} hashSpy={true} onClick={closeMenu}>
                {t("home")}
              </Link>
            </li>
            <li>
              <Link to="parcours" smooth={true} duration={500} spy={true} hashSpy={true} onClick={closeMenu}>
                {t("parcours")}
              </Link>
            </li>
            <li>
              <Link to="services" smooth={true} duration={500} spy={true} hashSpy={true} onClick={closeMenu}>
                {t("myServices")}
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} spy={true} hashSpy={true} onClick={closeMenu}>
                {t("projectsTitle")}
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} spy={true} hashSpy={true} onClick={closeMenu}>
                {t("contactTitle")}
              </Link>
            </li>
          </ul>
        </nav>

        {/* ✅ Sélecteur de langue bien positionné */}
        <LanguageSwitcher />
      </div>
    </header>
  );
}

export default Header;

