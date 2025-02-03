import React from "react";
import { useTranslation } from "react-i18next";
import "../Styles/LanguageSwitcher.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    if (i18n?.changeLanguage) {
      i18n.changeLanguage(lng);
      localStorage.setItem("language", lng);
      console.log("Langue changée en :", lng);
    } else {
      console.error("Erreur: i18n.changeLanguage n'est pas disponible.");
    }
  };

  return (
    <div className="language-switcher">
      <button className="lang-btn" onClick={() => changeLanguage("fr")} aria-label="Changer la langue en Français">
        🇫🇷 FR
      </button>
      <button className="lang-btn" onClick={() => changeLanguage("en")} aria-label="Switch to English">
        🇬🇧 EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
