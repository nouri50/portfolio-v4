import { useEffect } from "react";

function useScrollAnimation() {
  useEffect(() => {
    const fadeInSections = document.querySelectorAll(".fade-in-section");

    const handleScroll = () => {
      fadeInSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.9; // 90% de la hauteur visible
        if (isVisible) {
          section.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Exécuter au chargement pour détecter les sections visibles
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}

export default useScrollAnimation;
