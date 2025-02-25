import React, { useState } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import logo from "../image/nouri-morouche_comp.webp";
import LanguageSwitcher from "./LanguageSwitcher";

function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="Logo Nouri Morouche" className="header-logo" />
        
        {/* ✅ Menu burger pour le mobile */}
        <button className="burger-menu" aria-label="Ouvrir le menu" onClick={toggleMenu}>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>
        
        {/* ✅ Navigation principale */}
        <nav className={`header-nav ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li><Link to="accueil" smooth={true} duration={500}>{t("home")}</Link></li>
            <li><Link to="parcours" smooth={true} duration={500}>{t("parcours")}</Link></li>
            <li><Link to="services" smooth={true} duration={500}>{t("myServices")}</Link></li>
            <li><Link to="projects" smooth={true} duration={500}>{t("projectsTitle")}</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>{t("contactMe")}</Link></li>
          </ul>
        </nav>

        {/* ✅ Sélecteur de langue bien positionné */}
        <LanguageSwitcher />
      </div>
    </header>
  );
}

export default Header;
