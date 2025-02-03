import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Active l'animation après un délai
    }, 500); // Temps d'activation de l'animation en ms
    return () => clearTimeout(timer); // Nettoyage
  }, []);

  return (
    <footer className={`footer fade-in ${isVisible ? "show" : ""}`}>
      <div className="footer-content">
        <p>© 2024 Nouri Morouche. Tous droits réservés.</p>
        <p>
          <a
            href="/politique"
            aria-label="Politique de confidentialité"
          >
            Politique de confidentialité
          </a>
        </p>
        {/* Icônes sociales */}
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/nouri-morouche/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/nouri50"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61569434236598"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
