import React from "react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { trackEvent } from "../utils/analytics";
import profileImage from "../image/photo-developpeur.webp";

function LandingPage() {
  const { t } = useTranslation();

  return (
    <section id="landing-page" className="landing-page" aria-label={t("landingSection")}>
      <div className="landing-content">
        <img src={profileImage} alt={t("altProfileImage")} className="landing-image" loading="lazy" />
        <h1 className="landing-title">{t("welcome")}</h1>
        <p className="landing-description">{t("description")}</p>

        <div className="social-buttons">
          <a href="https://www.linkedin.com/in/nouri-morouche" className="social-button linkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/nouri50" className="social-button github" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61569434236598" className="social-button facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
