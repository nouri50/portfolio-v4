import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="section services fade-in" aria-label={t("servicesSection")}>
      <Helmet>
        <title>{t("servicesTitle")}</title>
        <meta name="description" content={t("servicesDescription")} />
      </Helmet>
      
      <h2 className="section-title">{t("myServices")}</h2>
      <div className="services-container">
        <div className="service-card">
          <h3>{t("webDevelopment")}</h3>
          <p>{t("webDevelopmentDesc")}</p>
        </div>
        <div className="service-card">
          <h3>{t("seo")}</h3>
          <p>{t("seoDesc")}</p>
        </div>
        <div className="service-card">
          <h3>{t("techSupport")}</h3>
          <p>{t("techSupportDesc")}</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
