import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // 🔥 Importation pour la traduction
import "../Styles/CookieBanner.css";

const CookieBanner = () => {
  const { t } = useTranslation(); // 🔥 Utilisation de la traduction
  const [isVisible, setIsVisible] = useState(false);

  // Afficher la bannière si aucun consentement n'est donné
  useEffect(() => {
    const consentGiven = localStorage.getItem("cookieConsent");
    if (!consentGiven) {
      setIsVisible(true);
    }
  }, []);

  // Gérer le consentement
  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);

    // Activer Google Analytics ici si nécessaire
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "cookie_consent_accepted" });
  };

  const handleRefuse = () => {
    localStorage.setItem("cookieConsent", "refused");
    setIsVisible(false);

    // Désactiver tout suivi ici
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "cookie_consent_refused" });
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-labelledby="cookie-banner-title">
      <h2 id="cookie-banner-title">{t("cookieTitle")}</h2>
      <p>{t("cookieMessage")}</p>
      <div className="cookie-buttons">
        <button className="accept-button" onClick={handleAccept}>
          {t("acceptCookies")}
        </button>
        <button className="refuse-button" onClick={handleRefuse}>
          {t("refuseCookies")}
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
