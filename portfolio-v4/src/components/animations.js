// Intersection Observer pour détecter les éléments dans la vue
const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    { threshold: 0.1 } // L'animation démarre lorsque 10% de l'élément est visible
  );
  
  // Observer les éléments avec la classe fade-in
  document.querySelectorAll(".fade-in").forEach((element) => {
    observer.observe(element);
  });
  