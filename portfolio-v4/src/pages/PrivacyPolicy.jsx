import React from "react";
import { Helmet } from "react-helmet-async";
import "../Styles/privacyPolicy.css";

function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité | Nouri Morouche</title>
        <meta
          name="description"
          content="Découvrez notre politique de confidentialité concernant l'utilisation des cookies et Google Analytics pour analyser le trafic de notre site."
        />
        <meta property="og:title" content="Politique de Confidentialité | Nouri Morouche" />
        <meta
          property="og:description"
          content="En savoir plus sur la manière dont nous collectons et utilisons vos données pour améliorer l'expérience utilisateur."
        />
        <meta property="og:url" content="https://nmoroucheportfolio.fr/politique" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://nmoroucheportfolio.fr/images/privacy-policy-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Politique de Confidentialité | Nouri Morouche" />
        <meta
          name="twitter:description"
          content="Découvrez comment nous utilisons les cookies et Google Analytics pour améliorer votre expérience sur notre site."
        />
        <meta name="twitter:image" content="https://nmoroucheportfolio.fr/images/privacy-policy-cover.jpg" />

        {/* JSON-LD pour Schema.org */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Politique de Confidentialité",
            "description": "Découvrez notre politique de confidentialité concernant l'utilisation des cookies et Google Analytics pour analyser le trafic de notre site.",
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
                  "name": "Quels types de données collectons-nous ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nous collectons des données anonymes comme les pages visitées, la durée des visites, et le type d'appareil utilisé."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Comment utilisons-nous ces données ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Les données collectées servent uniquement à améliorer l'expérience utilisateur."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Que sont les cookies utilisés par Google Analytics ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Les cookies sont utilisés pour collecter des informations de manière anonyme et analyser les tendances du site."
                  }
                }
              ]
            }
          }
          `}
        </script>
      </Helmet>

      <div className="privacy-policy">
        <h1>Politique de Confidentialité</h1>
        <p>
          Votre confidentialité est importante pour nous. Nous utilisons Google
          Analytics pour analyser l’audience de notre site de manière anonyme.
        </p>
        <h2>1. Données collectées</h2>
        <ul>
          <li>Pages visitées</li>
          <li>Durée des visites</li>
          <li>Type d’appareil utilisé</li>
        </ul>
        <h2>2. Utilisation des données</h2>
        <p>
          Les données collectées servent à améliorer l’expérience utilisateur.
          Aucune donnée personnelle identifiable n’est collectée.
        </p>
        <h2>3. Cookies</h2>
        <p>
          Google Analytics utilise des cookies pour collecter ces informations.
          Vous pouvez désactiver les cookies via les paramètres de votre
          navigateur.
        </p>
        <h2>4. Contact</h2>
        <p>
          Pour toute question, contactez-nous à{" "}
          <strong>contact@nmoroucheportfolio.fr</strong>.
        </p>

        <a href="/" className="back-link">
          Retour à l'accueil
        </a>
      </div>
    </>
  );
}

export default PrivacyPolicy;
