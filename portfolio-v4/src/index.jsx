import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // Importation de HelmetProvider
import App from "./App";
import "./reset/index.css";
import "./Styles/global.css";

// 🌍 Importation de i18n pour la traduction
import "./utils/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HelmetProvider> {/* Englobant l'application avec HelmetProvider */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
