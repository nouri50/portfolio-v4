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
      portfolio: "Portfolio Personnel",
      portfolioDesc: "Un portfolio moderne et interactif pour présenter mes compétences et projets.",
      blog: "Blog Communautaire",
      blogDesc: "Un blog interactif pour publier et commenter des articles.",
      taskManager: "Gestionnaire de tâches",
      taskManagerDesc: "Une application performante pour organiser vos tâches quotidiennes.",
      viewDetails: "Voir les détails",
      hideDetails: "Masquer les détails",
      technologiesUsed: "Technologies utilisées",
      viewOnGithub: "Voir sur GitHub",

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
      downloadCV: "Télécharger le CV"
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
      portfolio: "Personal Portfolio",
      portfolioDesc: "A modern and interactive portfolio to showcase my skills and projects.",
      blog: "Community Blog",
      blogDesc: "An interactive blog to publish and comment on articles.",
      taskManager: "Task Manager",
      taskManagerDesc: "A powerful application to organize your daily tasks.",
      viewDetails: "View details",
      hideDetails: "Hide details",
      technologiesUsed: "Technologies used",
      viewOnGithub: "View on GitHub",

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
      downloadCV: "Download CV"
    }
  }
};

i18n
  .use(initReactI18next) // Liens avec react-i18next
  .init({
    resources,
    lng: "fr",  // Langue par défaut
    fallbackLng: "fr", // Langue de secours
    interpolation: {
      escapeValue: false, // Pas nécessaire pour React
    },
  });

export default i18n;
