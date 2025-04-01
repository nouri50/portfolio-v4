import React from "react";
import { Routes, Route } from "react-router-dom";  // ✅ PAS DE `BrowserRouter` ici
import ScrollToTop from "./utils/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./sections/LandingPage";
import Parcours from "./sections/Parcours";
import Services from "./sections/Mes-service";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import CvPage from "./pages/CvPage";
import ScrollToTopButton from "./components/ScrollToTopButton"; // ✅ Ajout du bouton
import "./Styles/global.css";
import CookieBanner from "./utils/CookieBanner"; // ✅ Import du composant

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <ScrollToTopButton /> {/* ✅ Bouton pour remonter en haut */}
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <section id="accueil"><LandingPage /></section>
              <section id="parcours"><Parcours /></section>
              <section id="services"><Services /></section>
              <section id="projects"><Projects /></section>
              <section id="contact"><Contact /></section>
            </>
          } />
          <Route path="/politique" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cv" element={<CvPage />} />
        </Routes>
      </main>
      <CookieBanner /> 
      <Footer />
    </>
  );
};

export default App;
