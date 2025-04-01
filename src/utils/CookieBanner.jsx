import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../Styles/CookieBanner.css";

const CookieBanner = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = getCookie("cookieConsent");

    console.log("🍪 Consent actuel :", consent); // 🔍 DEBUG

    if (!consent) {
      setIsVisible(true);
    } else {
      // Déjà défini → transmettre le consentement à Google Tag Manager
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "default_consent_restored",
        analytics_storage: consent === "accepted" ? "granted" : "denied",
        ad_storage: "denied", // Par défaut pour la pub (car tu n'es pas freelance)
      });
    }
  }, []);

  const setCookie = (name, value, days) => {
    const expires = new Date(Date.now() + days * 86400000).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`;
  };

  const getCookie = (name) => {
    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match ? match[2] : null;
  };

  const handleAccept = () => {
    setCookie("cookieConsent", "accepted", 180);
    setIsVisible(false);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "cookie_consent_accepted",
      analytics_storage: "granted",
      ad_storage: "denied", // désactivé volontairement
    });

    console.log("✅ Consentement accepté et stocké !");
  };

  const handleRefuse = () => {
    setCookie("cookieConsent", "refused", 180);
    setIsVisible(false);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "cookie_consent_refused",
      analytics_storage: "denied",
      ad_storage: "denied",
    });

    console.log("❌ Consentement refusé et stocké !");
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
