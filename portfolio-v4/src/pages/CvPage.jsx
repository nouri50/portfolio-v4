import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ZoomIn, ZoomOut } from "react-feather";
import { useTranslation } from "react-i18next";
import "../Styles/CvPage.css";

const CvPage = () => {
  const { t } = useTranslation();
  const [zoom, setZoom] = useState(100);

  const handleZoomIn = () => setZoom((prevZoom) => Math.min(prevZoom + 25, 300));
  const handleZoomOut = () => setZoom((prevZoom) => Math.max(prevZoom - 25, 50));

  return (
    <div className="cv-container">
      <h2 className="cv-title">{t("cvPreview")}</h2>

      <div className="zoom-controls">
        <button onClick={handleZoomOut} className="zoom-button">
          <ZoomOut size={18} /> -
        </button>
        <span>{zoom}%</span>
        <button onClick={handleZoomIn} className="zoom-button">
          <ZoomIn size={18} /> +
        </button>
      </div>

      <div className="cv-fullscreen">
        <iframe
          className="cv-preview"
          src={`/Cv-NouriMorouche.pdf#zoom=${zoom}`} // 🔥 Correction du chemin du PDF
          title={t("cvTitle")}
          style={{ width: "100%", height: "90vh", border: "none" }} // Assure un affichage correct
        />
      </div>

      <Link to="/" className="back-button">
        <ArrowLeft size={18} /> {t("backToHome")}
      </Link>
    </div>
  );
};

export default CvPage;
