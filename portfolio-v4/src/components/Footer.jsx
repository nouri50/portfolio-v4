import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; 
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

function Footer() {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // 🔥 Vérifie que la traduction est bien chargée
  console.log("Langue actuelle :", i18n.language);
  console.log("Traduction du footer :", t("allRightsReserved"));

  return (
    <footer className={`footer fade-in ${isVisible ? "show" : ""}`}>
      <div className="footer-content">
        <p>© 2024 Nouri Morouche. {t("allRightsReserved")}</p>
        <p>
          <a
            href="/politique"
            aria-label={t("privacyPolicy")}
            title={t("privacyPolicy")}
          >
            {t("privacyPolicy")}
          </a>
        </p>

        {/* Icônes sociales */}
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/nouri-morouche/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn - Nouri Morouche"
          >
            <FaLinkedin aria-hidden="true" />
          </a>
          <a
            href="https://github.com/nouri50"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub - Nouri Morouche"
          >
            <FaGithub aria-hidden="true" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61569434236598"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            title="Facebook - Nouri Morouche"
          >
            <FaFacebook aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
