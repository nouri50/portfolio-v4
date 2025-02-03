import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

import project1Image from "../image/gestionnaire_des_tache_comp.webp";
import project2Image from "../image/portfolio.webp";
import project3Image from "../image/blog.webp";

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
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "MongoDB", icon: <FaDatabase /> }
      ],
      image: project1Image,
      githubLink: "https://github.com/nouri50/GESTIONNAIRE-de-tache-"
    },
    {
      id: 2,
      title: t("portfolio"),
      description: t("portfolioDesc"),
      technologies: [{ name: "React.js", icon: <FaReact /> }],
      image: project2Image,
      githubLink: "https://github.com/nouri50/portfoliov2"
    },
    {
      id: 3,
      title: t("blog"),
      description: t("blogDesc"),
      technologies: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "MongoDB", icon: <FaDatabase /> }
      ],
      image: project3Image,
      githubLink: null
    },
  ];

  return (
    <section id="projects" className="section projects">
      <h2 className="section-title">{t("projectsTitle")}</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
