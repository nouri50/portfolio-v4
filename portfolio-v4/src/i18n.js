import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  fr: {
    translation: {
      welcome: "Bienvenue sur mon portfolio",
      description: "Je suis un développeur passionné spécialisé dans la création de solutions digitales modernes.",
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
      contactMe: "Contactez-moi",
      parcours: "Mon Parcours",
      experience: "Expérience Professionnelle",
      stage: "Stage en Développement Web - Insy2s",
      formation: "Formation",
      diploma: "Titre Professionnel Développeur Web et Mobile",
      technologies: "Technologies et Outils Maîtrisés",
      myServices: "Mes Services",
      webDevelopment: "Développement Web",
      webDevelopmentDesc: "Création et développement de sites modernes avec React.js, Symfony et Node.js.",
      seo: "SEO",
      seoDesc: "Amélioration du référencement naturel pour maximiser la visibilité sur Google.",
      techSupport: "Support Technique",
      techSupportDesc: "Assistance pour vos projets, maintenance et corrections techniques.",
      cvTitle: "Mon CV",
      cvPreview: "Découvrez un aperçu de mon CV et consultez-le en ligne.",
      viewFullCV: "Voir mon CV en ligne",
      downloadCV: "Télécharger le CV"
    }
  },
  en: {
    translation: {
      welcome: "Welcome to my portfolio",
      description: "I am a passionate developer specializing in creating modern digital solutions.",
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
      contactMe: "Contact Me",
      parcours: "My Journey",
      experience: "Professional Experience",
      stage: "Internship in Web Development - Insy2s",
      formation: "Education",
      diploma: "Professional Web and Mobile Developer Title",
      technologies: "Technologies and Tools Mastered",
      myServices: "My Services",
      webDevelopment: "Web Development",
      webDevelopmentDesc: "Creation and development of modern websites with React.js, Symfony, and Node.js.",
      seo: "SEO",
      seoDesc: "Improving natural referencing to maximize visibility on Google.",
      techSupport: "Technical Support",
      techSupportDesc: "Assistance for your projects, maintenance, and technical corrections.",
      cvTitle: "My Resume",
      cvPreview: "See a preview of my resume and view it online.",
      viewFullCV: "View my full CV",
      downloadCV: "Download CV"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fr", // Langue par défaut
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
