import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft } from "react-feather";
import { useTranslation } from "react-i18next";
import "../Styles/CvPage.css";

const CvPage = () => {
  const { t } = useTranslation();

  // 📌 Détecter si on est en local ou en production
  const isLocal = window.location.hostname === "localhost";
  const cvPreview = isLocal
    ? "/assets/Cv-NouriMorouche.pdf" // ✅ En local
    : "https://nmoroucheportfolio.fr/assets/Cv-NouriMorouche.pdf"; // ✅ En production

  return (
    <div className="cv-container">
      {/* 📌 SEO & Métadonnées */}
      <Helmet>
        <title>{t("cvTitle")} - Nouri Morouche</title>
        <meta name="description" content="Découvrez mon CV en ligne et téléchargez-le en format PDF." />
        <meta property="og:title" content="CV - Nouri Morouche" />
        <meta property="og:description" content="Consultez et téléchargez mon CV de développeur web." />
        <meta property="og:image" content="https://nmoroucheportfolio.fr/assets/cv-thumbnail.jpg" />
        <meta property="og:url" content={cvPreview} />
      </Helmet>

      {/* 📌 Titre */}
      <h2 className="cv-title">{t("cvPreview")}</h2>

      {/* 📌 Aperçu du CV */}
      <div className="cv-fullscreen">
        <iframe
          className="cv-preview"
          src={cvPreview}
          title={t("cvTitle")}
          style={{ width: "100%", height: "90vh", border: "none" }}
          loading="lazy"
        />
      </div>

      {/* 📌 Boutons */}
      <div className="cv-buttons">
        <a href={cvPreview} download="NouriMorouche_CV.pdf" className="btn-download">
          📄 {t("downloadCV")}
        </a>
        <Link to="/" className="back-button">
          <ArrowLeft size={18} /> {t("backToHome")}
        </Link>
      </div>
    </div>
  );
};

export default CvPage;
