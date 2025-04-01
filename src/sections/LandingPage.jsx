import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import profileImage from "../image/photo-developpeur.webp";

function LandingPage() {
  const { t } = useTranslation();

  return (
    <section id="landing-page" className="landing-page" aria-label={t("landingSection")}>
      <Helmet>
        <title>Portfolio Développeur Web | Nouri Morouche</title>
        <meta name="description" content="Bienvenue sur le portfolio de Nouri Morouche, développeur web spécialisé en React, Symfony et MySQL." />
        <link rel="canonical" href="https://nmoroucheportfolio.fr/#landing-page" />
        <meta property="og:title" content="Portfolio Développeur Web | Nouri Morouche" />
        <meta property="og:description" content="Découvrez mon portfolio et mes projets en développement web fullstack." />
        <meta property="og:image" content="https://nmoroucheportfolio.fr/assets/portfolio-thumbnail.png" />
        <meta property="og:url" content="https://nmoroucheportfolio.fr/#landing-page" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="landing-content">
        <img src={profileImage} alt={t("altProfileImage")} className="landing-image" loading="lazy" />
        <h1 className="landing-title">{t("welcome")}</h1>
        <p className="landing-description">{t("description")}</p>

        <div className="social-buttons">
          <a href="https://www.linkedin.com/in/nouri-morouche-9a8237140/" className="social-button linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/nouri50" className="social-button github" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61569434236598" className="social-button facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
