import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const CvPage = () => {
  const { t } = useTranslation();

  return (
    <section className="cv-page">
      <div className="container">
        <h2>{t("cvTitle")}</h2>
        <p>{t("cvPreview")}</p>

        <div className="cv-preview-container">
          <iframe 
            src="/assets/Cv-NouriMorouche.pdf" 
            width="100%" 
            height="600px" 
            title="CV de Nouri Morouche"
          ></iframe>
        </div>

        <div className="back-button">
          <Link to="/" className="btn-secondary">{t("back")}</Link>
        </div>
      </div>
    </section>
  );
};

export default CvPage;
