import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section id="not-found" className="not-found" aria-label="Erreur 404 - Page non trouvée">
      <Helmet>
        <title>404 - Page non trouvée | Portfolio Développeur Web | Nouri Morouche</title>
        <meta name="description" content="Erreur 404 : La page que vous recherchez n'existe pas. Redirection vers l'accueil dans quelques secondes." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://nmoroucheportfolio.fr/404" />
        <meta property="og:title" content="404 - Page non trouvée | Nouri Morouche" />
        <meta property="og:description" content="La page que vous recherchez est introuvable sur le portfolio de Nouri Morouche." />
        <meta property="og:image" content="https://nmoroucheportfolio.fr/assets/portfolio-thumbnail.png" />
        <meta property="og:url" content="https://nmoroucheportfolio.fr/404" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="not-found-content">
        <h1>404</h1>
        <p>Oups ! La page que vous recherchez n'existe pas.</p>
        <p>Vous serez redirigé vers l'accueil dans <strong>5 secondes</strong>.</p>
        <Link to="/" className="btn-home">Retour immédiat à l'accueil</Link>
      </div>
    </section>
  );
}

export default NotFound;
