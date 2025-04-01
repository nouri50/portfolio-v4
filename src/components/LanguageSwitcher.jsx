import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage("fr")} className={i18n.language === "fr" ? "active" : ""}>FR</button>
      <button onClick={() => changeLanguage("en")} className={i18n.language === "en" ? "active" : ""}>EN</button>
    </div>
  );
}

export default LanguageSwitcher;
