export const initGoogleAnalytics = (measurementId) => {
  const isLocalhost = window.location.hostname === "localhost";

  if (isLocalhost || !measurementId) {
    console.log("🔴 Google Analytics désactivé en développement.");
    window[`ga-disable-${measurementId}`] = true; // empêche GA4 de fonctionner
    return;
  }

  if (typeof window.gtag !== "function") {
    console.warn("⚠️ Google Analytics non chargé !");
    return;
  }

  window.gtag("js", new Date());
  window.gtag("config", measurementId, { send_page_view: false });

  console.log("✅ Google Analytics activé en production !");
};

export const trackPageView = (path = window.location.pathname) => {
  const isLocalhost = window.location.hostname === "localhost";

  if (isLocalhost) return;

  if (typeof window.gtag !== "function") return;

  window.gtag("event", "page_view", { page_path: path });
};

export const trackEvent = (action, category, label, value) => {
  const isLocalhost = window.location.hostname === "localhost";

  if (isLocalhost) return;

  if (typeof window.gtag !== "function") return;

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
