import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./sections/LandingPage";
import Parcours from "./sections/parcours";
import Services from "./sections/Mes-service";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import CvPage from "./pages/CvPage";
import ScrollToTopButton from "./components/ScrollToTopButton";
import CookieBanner from "./utils/CookieBanner";
import { initGoogleAnalytics, trackPageView } from "./utils/analytics";
import "./Styles/global.css";

// ✅ Chargement via .env
const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

const lang = navigator.language.slice(0, 2);
const supported = ["fr", "en"];
if (!supported.includes(lang)) {
  console.warn("Langue non supportée. Le navigateur gérera la traduction.");
}


const App = () => {
  const location = useLocation();

  useEffect(() => {
    initGoogleAnalytics(MEASUREMENT_ID);
  }, []);

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <Header />
      <ScrollToTopButton />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="accueil"><LandingPage /></section>
                <section id="parcours"><Parcours /></section>
                <section id="services"><Services /></section>
                <section id="projects"><Projects /></section>
                <section id="contact"><Contact /></section>
              </>
            }
          />
          <Route path="/politique" element={<PrivacyPolicy />} />
          <Route path="/cv" element={<CvPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <CookieBanner />
      <Footer />
    </>
  );
};

export default App;
