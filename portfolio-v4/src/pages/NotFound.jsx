import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); // Redirection vers l'accueil après 5 secondes
    }, 5000);

    return () => clearTimeout(timer); // Nettoyage du timer si l'utilisateur quitte la page avant
  }, [navigate]);

  return (
    <>
      <Helmet>
        <title>404 - Page Introuvable</title>
        <meta
          name="description"
          content="La page demandée n'existe pas. Vous serez redirigé vers l'accueil dans quelques secondes."
        />
      </Helmet>

      <div className="not-found">
        <h1>404</h1>
        <p>Oups ! La page que vous recherchez n'existe pas.</p>
        <p>Vous allez être redirigé vers l'accueil dans <strong>5 secondes</strong>.</p>
        <Link to="/" className="btn-home">
          Retour immédiat à l'accueil
        </Link>
      </div>
    </>
  );
}

export default NotFound;
