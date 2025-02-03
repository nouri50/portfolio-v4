export const initGoogleAnalytics = (measurementId) => {
  const isLocalhost = window.location.hostname === "localhost";
  const isDevelopment = process.env.NODE_ENV !== "production";

  if (isLocalhost || isDevelopment) {
    console.log("🔴 Google Analytics désactivé en mode local ou développement.");
    return;
  }

  if (typeof window.gtag !== "function") {
    console.warn("⚠️ Google Analytics n'est pas chargé. Vérifie que ton script est bien ajouté dans index.html.");
    return;
  }

  window.gtag("js", new Date());
  window.gtag("config", measurementId, { send_page_view: false });

  console.log("✅ Google Analytics activé en production !");
};

export const trackPageView = (path = window.location.pathname) => {
  const isLocalhost = window.location.hostname === "localhost";
  const isDevelopment = process.env.NODE_ENV !== "production";

  if (isLocalhost || isDevelopment) return;

  if (typeof window.gtag !== "function") {
    console.warn("⚠️ Google Analytics n'est pas chargé.");
    return;
  }

  window.gtag("event", "page_view", { page_path: path });
  console.log(`📊 Page vue enregistrée : ${path}`);
};

export const trackEvent = (action, category, label, value) => {
  const isLocalhost = window.location.hostname === "localhost";
  const isDevelopment = process.env.NODE_ENV !== "production";

  if (isLocalhost || isDevelopment) return;

  if (typeof window.gtag !== "function") {
    console.warn("⚠️ Google Analytics n'est pas chargé.");
    return;
  }


  if (window.location.hostname === "localhost") {
    console.warn("Google Analytics désactivé en local");
    window['ga-disable-G-72S8X47T2F'] = true; // Remplace par ton ID GA4
  }
  

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });

  console.log(`📊 Événement suivi : ${action} (Catégorie: ${category}, Label: ${label}, Valeur: ${value})`);
};
