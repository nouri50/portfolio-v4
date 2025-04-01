import React, { useState, useEffect } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "../image/logo.webp";
import "../Styles/global.css";

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Vérifie si on est sur la page d'accueil
  const isHomePage = location.pathname === "/";

  // Fonction pour naviguer et mettre à jour l'URL
  const handleNavigation = (section) => {
    if (isHomePage) {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -50,
      });

      // ✅ Mise à jour de l'URL avec l'ancre
      window.history.replaceState(null, "", `#${section}`);
    } else {
      window.location.href = `/#${section}`;
    }
    closeMenu();
  };

  // Effet pour scroller à la bonne section si l'URL contient une ancre au chargement
  useEffect(() => {
    if (isHomePage && window.location.hash) {
      const section = window.location.hash.replace("#", "");
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 500,
          offset: -50,
        });
      }, 300);
    }
  }, [isHomePage]);

  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="Logo" className="header-logo" />

        <nav className="header-nav">
          <ul>
            <li><ScrollLink to="accueil" smooth={true} duration={500} onClick={() => handleNavigation("accueil")}>{t("home")}</ScrollLink></li>
            <li><ScrollLink to="parcours" smooth={true} duration={500} onClick={() => handleNavigation("parcours")}>{t("parcours")}</ScrollLink></li>
            <li><ScrollLink to="services" smooth={true} duration={500} onClick={() => handleNavigation("services")}>{t("myServices")}</ScrollLink></li>
            <li><ScrollLink to="projects" smooth={true} duration={500} onClick={() => handleNavigation("projects")}>{t("projectsTitle")}</ScrollLink></li>
            <li><ScrollLink to="contact" smooth={true} duration={500} onClick={() => handleNavigation("contact")}>{t("contactTitle")}</ScrollLink></li>
          </ul>
        </nav>

        <div className="language-switcher-desktop">
          <LanguageSwitcher />
        </div>

        <button className="burger-menu" aria-label="Ouvrir le menu" onClick={toggleMenu}>
          ☰
        </button>

        {isMenuOpen && (
          <div className="mobile-menu">
            <button className="close-menu" onClick={closeMenu}>✖</button>
            <ul>
              <li><ScrollLink to="accueil" smooth={true} duration={500} onClick={() => handleNavigation("accueil")}>{t("home")}</ScrollLink></li>
              <li><ScrollLink to="parcours" smooth={true} duration={500} onClick={() => handleNavigation("parcours")}>{t("parcours")}</ScrollLink></li>
              <li><ScrollLink to="services" smooth={true} duration={500} onClick={() => handleNavigation("services")}>{t("myServices")}</ScrollLink></li>
              <li><ScrollLink to="projects" smooth={true} duration={500} onClick={() => handleNavigation("projects")}>{t("projectsTitle")}</ScrollLink></li>
              <li><ScrollLink to="contact" smooth={true} duration={500} onClick={() => handleNavigation("contact")}>{t("contactTitle")}</ScrollLink></li>
            </ul>
            <div className="language-switcher-mobile">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
