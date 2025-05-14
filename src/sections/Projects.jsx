import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { FaGithub, FaReact, FaDatabase, FaCss3Alt } from "react-icons/fa";

import project1Image from "../image/gestionnaire_des_tache_comp.webp";
import project2Image from "../image/portfolio.webp";
import project3Image from "../image/blog.webp";
import project4Image from "../image/site_ecommerce-jeuxvideo.png"; // Image fictive pour le projet e-commerce
import project5Image from "../image/miniblog.png"
const Projects = () => {
  const { t } = useTranslation();
  const [activeProject, setActiveProject] = useState(null);

  const toggleDetails = (projectId) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  const projects = [
    {
      id: 1,
      title: t("taskManager"),
      description: t("taskManagerDesc"),
      technologies: [
        { name: "React.js", icon: <FaReact /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "MySQL", icon: <FaDatabase /> }
      ],
      image: project1Image,
      githubLink: "https://github.com/nouri50/GESTIONNAIRE-de-tache-"
    },
    {
      id: 2,
      title: t("portfolio"),
      description: t("portfolioDesc"),
      technologies: [
        { name: "React.js", icon: <FaReact /> },
        { name: "CSS", icon: <FaCss3Alt /> }
      ],
      image: project2Image,
      githubLink: "https://github.com/nouri50/portfoliov2"
    },
    {
      id: 3,
      title: t("blog"),
      description: t("blogDesc"),
      technologies: [
        { name: "React.js", icon: <FaReact /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "MySQL", icon: <FaDatabase /> }
      ],
      image: project3Image,
      githubLink: null
    },
    {
      id: 4,
      title: t("gamingEcommerce"), // ✅ Utilisation de la traduction
      description: t("gamingEcommerceDesc"), // ✅ Utilisation de la traduction
      technologies: [
        { name: "React.js", icon: <FaReact /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "MySQL", icon: <FaDatabase /> }
      ],
      image: project4Image,
      githubLink: null
    },

{
  id: 5,
  title: t("MiniBlog (TP CDA)"),
  description: t("miniblogDesc"),
  technologies: [
    { name: "HTML" },
    { name: "JavaScript" },
    { name: "Bootstrap" }
  ],
  image: project5Image, // remplace par une image réelle si dispo
  githubLink: "https://github.com/nouri50/cda-mini-blog",

}


  ];

  return (
    <section id="projects" className="section projects fade-in" aria-labelledby="projects-title">
      {/* ✅ SEO avec Helmet */}
      <Helmet>
        <title>{t("projectsTitle")} - Nouri Morouche</title>
        <meta name="description" content={t("portfolioDesc")} />
        <meta property="og:title" content={t("projectsTitle")} />
        <meta property="og:description" content={t("portfolioDesc")} />
        <meta property="og:url" content="https://nmoroucheportfolio.fr/projects" />
        <meta property="og:type" content="website" />
      </Helmet>

      <h2 id="projects-title" className="section-title">{t("projectsTitle")}</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <article key={project.id} className="project-card" aria-labelledby={`project-${project.id}`}>
            <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
            <h3 id={`project-${project.id}`}>{project.title}</h3>
            <p>{project.description}</p>

            <button className="details-button" onClick={() => toggleDetails(project.id)}>
              {activeProject === project.id ? t("hideDetails") : t("viewDetails")}
            </button>

            {activeProject === project.id && (
              <div className="project-details">
                <h4>{t("technologiesUsed")}:</h4>
                <div className="technologies-icons">
                  {project.technologies.map((tech, idx) => (
                    <div key={idx} className="tech-item">
                      {tech.icon} {tech.name}
                    </div>
                  ))}
                </div>

                {project.githubLink ? (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                    <FaGithub /> {t("viewOnGithub")}
                  </a>
                ) : (
                  <p>{t("viewOnGithub")} - {t("notAvailable")}</p>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
