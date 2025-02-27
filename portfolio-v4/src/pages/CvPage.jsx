import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "react-feather";
import { useTranslation } from "react-i18next";
import "../Styles/CvPage.css";

const CvPage = () => {
  const { t } = useTranslation();

  return (
    <div className="cv-container">
      <h2 className="cv-title">{t("cvPreview")}</h2>

      <div className="cv-fullscreen">
        <iframe
          className="cv-preview"
          src="/assets/Cv-NouriMorouche.pdf" // ✅ Chemin correct
          title={t("cvTitle")}
          style={{ width: "100%", height: "90vh", border: "none" }} // 🔥 Largeur et hauteur adaptées
        />
      </div>

      <Link to="/" className="back-button">
        <ArrowLeft size={18} /> {t("backToHome")}
      </Link>
    </div>
  );
};

export default CvPage;
