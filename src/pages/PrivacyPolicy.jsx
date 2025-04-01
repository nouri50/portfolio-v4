import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import "../Styles/privacyPolicy.css";

function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("privacyPolicyTitle")} | Nouri Morouche</title>
        <meta name="description" content={t("privacyPolicyDescription")} />
        <meta property="og:title" content={`${t("privacyPolicyTitle")} | Nouri Morouche`} />
        <meta property="og:description" content={t("privacyPolicyDescription")} />
        <meta property="og:url" content="https://nmoroucheportfolio.fr/politique" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://nmoroucheportfolio.fr/images/privacy-policy-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${t("privacyPolicyTitle")} | Nouri Morouche`} />
        <meta name="twitter:description" content={t("privacyPolicyDescription")} />
        <meta name="twitter:image" content="https://nmoroucheportfolio.fr/images/privacy-policy-cover.jpg" />

        {/* ✅ JSON-LD (Schema.org) pour améliorer le référencement */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "${t("privacyPolicyTitle")}",
            "description": "${t("privacyPolicyDescription")}",
            "url": "https://nmoroucheportfolio.fr/politique",
            "author": {
              "@type": "Person",
              "name": "Nouri Morouche"
            },
            "mainEntity": {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "${t("faqDataCollection")}",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "${t("faqDataCollectionAnswer")}"
                  }
                },
                {
                  "@type": "Question",
                  "name": "${t("faqDataUsage")}",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "${t("faqDataUsageAnswer")}"
                  }
                },
                {
                  "@type": "Question",
                  "name": "${t("faqCookies")}",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "${t("faqCookiesAnswer")}"
                  }
                }
              ]
            }
          }
          `}
        </script>
      </Helmet>

      <div className="privacy-policy">
        <h1>{t("privacyPolicyTitle")}</h1>
        <p>{t("privacyPolicyIntro")}</p>

        <h2>{t("dataCollected")}</h2>
        <ul>
          <li>{t("dataCollectedPages")}</li>
          <li>{t("dataCollectedTime")}</li>
          <li>{t("dataCollectedDevice")}</li>
        </ul>

        <h2>{t("dataUsage")}</h2>
        <p>{t("dataUsageDescription")}</p>

        <h2>{t("cookies")}</h2>
        <p>{t("cookiesDescription")}</p>

        <h2>{t("contact")}</h2>
        <p>
          {t("contactInfo")}{" "}
          <strong>contact@nmoroucheportfolio.fr</strong>.
        </p>

        <a href="/" className="back-link">
          {t("backToHome")}
        </a>
      </div>
    </>
  );
}

export default PrivacyPolicy;
