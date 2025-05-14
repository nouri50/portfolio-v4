import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  fr: {
    translation: {
      // 🔹 Accueil & Général
      welcome: "Bienvenue sur mon portfolio",
      description: "Je suis un développeur passionné spécialisé dans la création de solutions digitales modernes.",
      home: "Accueil",
      landingSection: "Section d'accueil",
      altProfileImage: "Image de profil",

      // 🔹 Projets
      projectsTitle: "Mes Projets",
      portfolio: "1er version portfolio",
      portfolioDesc: "Un portfolio moderne et interactif pour présenter mes compétences et projets.",
      blog: "Blog Communautaire",
      blogDesc: "Un blog interactif pour publier et commenter des articles.",
      taskManager: "Gestionnaire de tâches",
      taskManagerDesc: "Une application performante pour organiser vos tâches quotidiennes.",
      gamingEcommerce: "E-commerce de jeux vidéo", // ✅ Ajout de la traduction
      gamingEcommerceDesc: "Site en cours de conception, développé avec React, CSS et MySQL.", // ✅ Ajout de la traduction
      viewDetails: "Voir les détails",
      hideDetails: "Masquer les détails",
      technologiesUsed: "Technologies utilisées",
      viewOnGithub: "Voir sur GitHub",
      notAvailable: "Non disponible",
      miniblog: "MiniBlog (TP CDA)",
      miniblogDesc: "Application web simulant un mini-blog avec API fictive. Ajout et suppression de posts, pagination, recherche, thème clair/sombre.",


      // 🔹 Services
      myServices: "Mes Services",
      servicesSection: "Section Services",
      servicesTitle: "Nos Services",
      servicesDescription: "Découvrez nos services professionnels",
      webDevelopment: "Développement Web",
      webDevelopmentDesc: "Création et développement de sites modernes avec React.js, Symfony et Node.js.",
      seo: "SEO",
      seoDesc: "Amélioration du référencement naturel pour maximiser la visibilité sur Google.",
      techSupport: "Support Technique",
      techSupportDesc: "Assistance pour vos projets, maintenance et corrections techniques.",

      // 🔹 Parcours & Expérience
      parcours: "Mon Parcours",
      experience: "Expérience Professionnelle",
      stage: "Stage en Développement Web - Insy2s",
      formation: "Formation",
      diploma: "Titre Professionnel Développeur Web et Mobile",
      technologies: "Technologies et Outils Maîtrisés",

      // 🔹 Contact
      contactSection: "Section Contact",
      contactTitle: "Contactez-moi",
      contactDescription: "Remplissez le formulaire pour me contacter",
      name: "Nom",
      email: "Email",
      message: "Message",
      send: "Envoyer",

      // 🔹 CV
      cvTitle: "Mon CV",
      cvPreview: "Découvrez un aperçu de mon CV et consultez-le en ligne.",
      viewFullCV: "Voir mon CV en ligne",
      downloadCV: "Télécharger le CV",

      // 🔹 Boutons
      backToHome: "Retour à l'accueil",

      // 🔹 Footer
      allRightsReserved: "Tous droits réservés.",
      privacyPolicy: "Politique de confidentialité",
      // 🔹 Politique de Confidentialité
      privacyPolicyTitle: "Politique de Confidentialité",
      privacyPolicyDescription: "Découvrez notre politique de confidentialité concernant l'utilisation des cookies et Google Analytics.",
      privacyPolicyIntro: "Votre confidentialité est importante pour nous. Nous utilisons Google Analytics pour analyser l’audience de notre site de manière anonyme.",

      dataCollected: "1. Données collectées",
      dataCollectedPages: "Pages visitées",
      dataCollectedTime: "Durée des visites",
      dataCollectedDevice: "Type d’appareil utilisé",

      dataUsage: "2. Utilisation des données",
      dataUsageDescription: "Les données collectées servent uniquement à améliorer l'expérience utilisateur. Aucune donnée personnelle identifiable n'est collectée.",

      cookies: "3. Cookies",
      cookiesDescription: "Google Analytics utilise des cookies pour collecter ces informations. Vous pouvez les désactiver via les paramètres de votre navigateur.",

      contact: "4. Contact",
      contactInfo: "Pour toute question, contactez-nous à",

      faqDataCollection: "Quels types de données collectons-nous ?",
      faqDataCollectionAnswer: "Nous collectons des données anonymes comme les pages visitées, la durée des visites, et le type d'appareil utilisé.",

      faqDataUsage: "Comment utilisons-nous ces données ?",
      faqDataUsageAnswer: "Les données collectées servent uniquement à améliorer l’expérience utilisateur.",

      faqCookies: "Que sont les cookies utilisés par Google Analytics ?",
      faqCookiesAnswer: "Les cookies sont utilisés pour collecter des informations de manière anonyme et analyser les tendances du site.",

      backToHome: "Retour à l'accueil",

      // 🔹 Bannière Cookies
      cookieTitle: "Nous respectons votre vie privée",
      cookieMessage: "Ce site utilise des cookies uniquement pour analyser le trafic et améliorer votre expérience utilisateur.",
      acceptCookies: "Accepter",
      refuseCookies: "Refuser",
      cvNotVisible: "Si le CV ne s'affiche pas correctement,",
      cvAdobeExtension: "désactivez temporairement votre extension Adobe ou ouvrez-le dans un nouvel onglet."

    }
  },
  en: {
    translation: {
      // 🔹 Home & General
      welcome: "Welcome to my portfolio",
      description: "I am a passionate developer specializing in creating modern digital solutions.",
      home: "Home",
      landingSection: "Landing Section",
      altProfileImage: "Profile Image",

      // 🔹 Projects
      projectsTitle: "My Projects",
      portfolio: "1st version of the portfolio",
      portfolioDesc: "A modern and interactive portfolio to showcase my skills and projects.",
      blog: "Community Blog",
      blogDesc: "An interactive blog to publish and comment on articles.",
      taskManager: "Task Manager",
      taskManagerDesc: "A powerful application to organize your daily tasks.",
      gamingEcommerce: "Video Game E-commerce", // ✅ Ajout de la traduction
      gamingEcommerceDesc: "Website under development, built with React, CSS, and MySQL.", // ✅ Ajout de la traduction
      viewDetails: "View details",
      hideDetails: "Hide details",
      technologiesUsed: "Technologies used",
      viewOnGithub: "View on GitHub",
      notAvailable: "Not available",
      miniblog: "MiniBlog (TP CDA)",
      miniblogDesc: "Web application simulating a mini-blog with a mock API. Add and delete posts, pagination, search, light/dark theme.",


      // 🔹 Services
      myServices: "My Services",
      servicesSection: "Services Section",
      servicesTitle: "Our Services",
      servicesDescription: "Discover our professional services",
      webDevelopment: "Web Development",
      webDevelopmentDesc: "Creation and development of modern websites with React.js, Symfony, and Node.js.",
      seo: "SEO",
      seoDesc: "Improving natural referencing to maximize visibility on Google.",
      techSupport: "Technical Support",
      techSupportDesc: "Assistance for your projects, maintenance, and technical corrections.",

      // 🔹 Journey & Experience
      parcours: "My Journey",
      experience: "Professional Experience",
      stage: "Internship in Web Development - Insy2s",
      formation: "Education",
      diploma: "Professional Web and Mobile Developer Certification",
      technologies: "Technologies and Tools Mastered",

      // 🔹 Contact
      contactSection: "Contact Section",
      contactTitle: "Contact Me",
      contactDescription: "Fill out the form to reach me",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",

      // 🔹 Resume
      cvTitle: "My Resume",
      cvPreview: "See a preview of my resume and view it online.",
      viewFullCV: "View my full CV",
      downloadCV: "Download CV",

      // 🔹 Buttons
      backToHome: "Back to Home",

      // 🔹 Footer
      allRightsReserved: "All rights reserved.",
      privacyPolicy: "Privacy Policy",

      // 🔹 Privacy Policy
      privacyPolicyTitle: "Privacy Policy",
      privacyPolicyDescription: "Learn about our privacy policy regarding the use of cookies and Google Analytics.",
      privacyPolicyIntro: "Your privacy is important to us. We use Google Analytics to analyze our site's audience anonymously.",

      dataCollected: "1. Collected Data",
      dataCollectedPages: "Visited pages",
      dataCollectedTime: "Duration of visits",
      dataCollectedDevice: "Device type used",

      dataUsage: "2. Data Usage",
      dataUsageDescription: "The collected data is used solely to improve the user experience. No personally identifiable data is collected.",

      cookies: "3. Cookies",
      cookiesDescription: "Google Analytics uses cookies to collect this information. You can disable them in your browser settings.",

      contact: "4. Contact",
      contactInfo: "For any inquiries, contact us at",

      faqDataCollection: "What types of data do we collect?",
      faqDataCollectionAnswer: "We collect anonymous data such as visited pages, duration of visits, and device type used.",

      faqDataUsage: "How do we use this data?",
      faqDataUsageAnswer: "The collected data is used solely to improve the user experience.",

      faqCookies: "What are the cookies used by Google Analytics?",
      faqCookiesAnswer: "Cookies are used to collect information anonymously and analyze site trends.",

      backToHome: "Back to Home",

      // 🔹 Cookie Banner
      cookieTitle: "We respect your privacy",
      cookieMessage: "This site uses cookies only to analyze traffic and improve your user experience.",
      acceptCookies: "Accept",
      refuseCookies: "Decline",
      cvNotVisible: "If the CV does not display properly,",
      cvAdobeExtension: "temporarily disable your Adobe extension or open it in a new tab."









    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "fr", // par défaut
    supportedLngs: ["fr", "en"], // 🔒 On bloque toutes les autres langues
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    nonExplicitSupportedLngs: true, // pour gérer "fr-FR", "en-US", etc.
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;



