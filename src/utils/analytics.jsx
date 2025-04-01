export const initGoogleAnalytics = (measurementId) => {
  const isLocalhost = window.location.hostname === "localhost";

  // 🚫 Désactive totalement Google Analytics en local
  if (isLocalhost) {
    console.log("🔴 Google Analytics est complètement désactivé en local !");
    window[`ga-disable-${measurementId}`] = true; // Bloque toutes les requêtes
    return;
  }

  if (typeof window.gtag !== "function") {
    console.warn("⚠️ Google Analytics n'est pas chargé.");
    return;
  }

  window.gtag("js", new Date());
  window.gtag("config", measurementId, { send_page_view: false });

  console.log("✅ Google Analytics activé en production !");
};

export const trackPageView = (path = window.location.pathname) => {
  const isLocalhost = window.location.hostname === "localhost";

  // 🚫 Bloquer le tracking en local
  if (isLocalhost) return;

  if (typeof window.gtag !== "function") {
    console.warn("⚠️ Google Analytics n'est pas chargé.");
    return;
  }

  window.gtag("event", "page_view", { page_path: path });
  console.log(`📊 Page vue enregistrée : ${path}`);
};

export const trackEvent = (action, category, label, value) => {
  const isLocalhost = window.location.hostname === "localhost";

  // 🚫 Bloquer les événements en local
  if (isLocalhost) return;

  if (typeof window.gtag !== "function") {
    console.warn("⚠️ Google Analytics n'est pas chargé.");
    return;
  }

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });

  console.log(`📊 Événement suivi : ${action} (Catégorie: ${category}, Label: ${label}, Valeur: ${value})`);
};
