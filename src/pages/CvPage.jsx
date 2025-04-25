import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft } from "react-feather";
import { useTranslation } from "react-i18next";
import "../Styles/CvPage.css";

const CvPage = () => {
  const { t } = useTranslation();

  // ✅ Détection de l'environnement
  const isLocal = window.location.hostname === "localhost";
  const cvPreview = isLocal
    ? "/assets/NouriMorouche_CV.pdf"
    : "https://nmoroucheportfolio.fr/assets/NouriMorouche_CV.pdf";

  return (
    <div className="cv-container">
      {/* ✅ SEO */}
      <Helmet>
        <title>Portfolio Développeur Web | Nouri Morouche</title>
        <meta name="description" content="Découvrez mon CV en ligne et téléchargez-le en format PDF." />
        <meta property="og:title" content="CV - Nouri Morouche" />
        <meta property="og:description" content="Consultez et téléchargez mon CV de développeur web." />
        <meta property="og:image" content="https://nmoroucheportfolio.fr/assets/portfolio-thumbnail.png" />
        <meta property="og:url" content="https://nmoroucheportfolio.fr/cv" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://nmoroucheportfolio.fr/cv" />
      </Helmet>

      {/* ✅ Titre */}
      <h2 className="cv-title">{t("cvPreview")}</h2>

      {/* ✅ Aperçu dans iframe */}
      <div className="cv-fullscreen">
        <iframe
          className="cv-preview"
          src={cvPreview}
          title="CV - Nouri Morouche"
          style={{ width: "100%", height: "90vh", border: "none" }}
          loading="lazy"
        />
      </div>

      {/* ✅ Boutons */}
      <div className="cv-buttons">
        <a
          href={cvPreview}
          download="NouriMorouche_CV.pdf"
          className="btn-download"
        >
          📄 {t("downloadCV")}
        </a>
        <Link to="/" className="back-button">
          <ArrowLeft size={18} /> {t("backToHome")}
        </Link>
      </div>

      {/* ✅ Message optionnel si le PDF ne s'affiche pas */}
      <p className="cv-warning">
        {t("cvNotVisible")}{" "}
        <strong>
          {t("cvAdobeExtension")}
        </strong>
      </p>
    </div>
  );
};

export default CvPage;
