import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { FaCode, FaSearch, FaHeadset } from "react-icons/fa";

function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="section services fade-in" aria-labelledby="services-title">
      <Helmet>
        <title>Portfolio Développeur Web | Nouri Morouche</title>
        <meta name="description" content="Découvrez les services proposés par Nouri Morouche, développeur web : création de sites web, SEO et support technique." />
        <link rel="canonical" href="https://nmoroucheportfolio.fr/#services" />
        <meta property="og:title" content="Portfolio Développeur Web | Nouri Morouche" />
        <meta property="og:description" content="Services de développement web, optimisation SEO et assistance technique pour vos projets digitaux." />
        <meta property="og:image" content="https://nmoroucheportfolio.fr/assets/portfolio-thumbnail.png" />
        <meta property="og:url" content="https://nmoroucheportfolio.fr/#services" />
        <meta property="og:type" content="website" />
      </Helmet>

      <h2 id="services-title" className="section-title">{t("myServices")}</h2>
      <p className="section-description">{t("servicesDescription")}</p>

      <div className="services-container">
        {/* Service : Développement Web */}
        <article className="service-card" aria-labelledby="web-dev-title">
          <FaCode className="service-icon" />
          <h3 id="web-dev-title">{t("webDevelopment")}</h3>
          <p>{t("webDevelopmentDesc")}</p>
        </article>

        {/* Service : SEO */}
        <article className="service-card" aria-labelledby="seo-title">
          <FaSearch className="service-icon" />
          <h3 id="seo-title">{t("seo")}</h3>
          <p>{t("seoDesc")}</p>
        </article>

        {/* Service : Support Technique */}
        <article className="service-card" aria-labelledby="tech-support-title">
          <FaHeadset className="service-icon" />
          <h3 id="tech-support-title">{t("techSupport")}</h3>
          <p>{t("techSupportDesc")}</p>
        </article>
      </div>
    </section>
  );
}

export default Services;
