import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Routes, Route, useLocation } from "react-router-dom"; // ✅ Import pour gérer les routes
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./sections/LandingPage";
import Parcours from "./sections/Parcours";
import Services from "./sections/Mes-service";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy"; // ✅ Import de la politique de confidentialité
import NotFound from "./pages/NotFound"; // ✅ Import de la page 404
import CvPage from "./pages/CvPage";  // ✅ Ajout de la page CV
import "./reset/index.css";
import "./Styles/global.css";

const App = () => {
  const { t, i18n } = useTranslation();
  const [currentSection, setCurrentSection] = useState("accueil");
  const location = useLocation(); // ✅ Vérifie la route active

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "fr";
    if (i18n.language !== savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  useEffect(() => {
    if (location.pathname !== "/politique" && location.pathname !== "/404") {
      const sections = ["accueil", "parcours", "services", "projects", "contact"];
      let timeoutId = null;

      const handleScroll = () => {
        let foundSection = "accueil";

        sections.forEach((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top >= 0 && rect.top < window.innerHeight * 0.5) {
              foundSection = section;
            }
          }
        });

        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setCurrentSection(foundSection);
          window.history.replaceState(null, "", `#${foundSection}`);
        }, 300);
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();

      return () => {
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(timeoutId);
      };
    }
  }, [location.pathname]);

  const seoData = {
    accueil: {
      title: "Portfolio - Nouri Morouche",
      description: "Bienvenue sur mon portfolio de développeur web spécialisé en React, CSS et MySQL.",
    },
    parcours: {
      title: "Parcours - Nouri Morouche",
      description: "Découvrez mon parcours et mon expérience en développement web.",
    },
    services: {
      title: "Services - Nouri Morouche",
      description: "Découvrez mes services de développement web et SEO.",
    },
    projects: {
      title: "Projets - Nouri Morouche",
      description: "Découvrez mes projets réalisés en React, CSS et MySQL.",
    },
    contact: {
      title: "Contact - Nouri Morouche",
      description: "Contactez-moi pour discuter de vos projets web.",
    },
    politique: {
      title: "Politique de Confidentialité - Nouri Morouche",
      description: "Consultez notre politique de confidentialité pour plus d’informations sur l’utilisation des données.",
    },
    notfound: {
      title: "Page non trouvée - Nouri Morouche",
      description: "La page que vous cherchez n'existe pas ou a été déplacée.",
    },
  };

  return (
    <div className="App">
      <Helmet>
        <title>{seoData[currentSection]?.title || "Portfolio - Nouri Morouche"}</title>
        <meta name="description" content={seoData[currentSection]?.description || ""} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={seoData[currentSection]?.title || ""} />
        <meta property="og:description" content={seoData[currentSection]?.description || ""} />
        <meta property="og:url" content={`https://nmoroucheportfolio.fr${location.pathname}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://nmoroucheportfolio.fr/portfolio-thumbnail.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData[currentSection]?.title || ""} />
        <meta name="twitter:description" content={seoData[currentSection]?.description || ""} />
        <meta name="twitter:image" content="https://nmoroucheportfolio.fr/portfolio-thumbnail.png" />
      </Helmet>

      <Header />
      <main>
        <Routes>
          {/* ✅ Navigation scrollable en une seule page */}
          <Route
            path="/"
            element={
              <>
                <section id="accueil" aria-label="Accueil">
                  <LandingPage />
                </section>
                <section id="parcours" aria-label="Parcours">
                  <Parcours />
                </section>
                <section id="services" aria-label="Services">
                  <Services />
                </section>
                <section id="projects" aria-label="Projets">
                  <Projects />
                </section>
                <section id="contact" aria-label="Contact">
                  <Contact />
                </section>
              </>
            }
          />
          {/* ✅ Pages individuelles */}
          <Route path="/politique" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cv" element={<CvPage />} /> 
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
