import React from "react";
import { useTranslation } from "react-i18next";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiSymfony, SiMysql, SiFigma, SiGit } from "react-icons/si";

function Parcours() {
  const { t } = useTranslation();

  const parcours = [
    {
      title: t("parcours"),
      items: [
        {
          header: t("experience"),
          date: "Nov 2023 - Fév 2024",
          description: t("stage"),
        },
      ],
    },
    {
      title: t("formation"),
      items: [
        {
          header: t("diploma"),
          date: "2034 - 2024",
          description: "Diplôme obtenu à l'AFCI.",
        },
      ],
    },
  ];

  const technologies = [
    { name: "HTML5", icon: <FaHtml5 size={30} color="#E34F26" /> },
    { name: "CSS3", icon: <FaCss3Alt size={30} color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJs size={30} color="#F7DF1E" /> },
    { name: "React.js", icon: <FaReact size={30} color="#61DAFB" /> },
    { name: "Node.js", icon: <FaNodeJs size={30} color="#339933" /> },
    { name: "Symfony", icon: <SiSymfony size={30} color="#000000" /> },
    { name: "MySQL", icon: <SiMysql size={30} color="#00758F" /> },
    { name: "Figma", icon: <SiFigma size={30} color="#A259FF" /> },
    { name: "Git", icon: <SiGit size={30} color="#F05032" /> },
  ];

  const cvPreview = "/assets/Cv-NouriMorouche.pdf";

  return (
    <section id="parcours" className="section parcours">
      <div className="container">
        <div className="card parcours">
          <h2>{t("parcours")}</h2>
          <div className="parcours-content">
            {parcours.map((section, index) => (
              <div key={index} className="parcours-section">
                <h3>{section.title}</h3>
                {section.items.map((item, idx) => (
                  <div key={idx} className="parcours-item">
                    <h4>{item.header}</h4>
                    <p className="date">{item.date}</p>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Section Aperçu du CV */}
        <div className="cv-section">
          <h2>{t("cvTitle")}</h2>
          <p>{t("cvPreview")}</p>
          <iframe 
            src={cvPreview} 
            className="cv-preview" 
            title="Aperçu du CV"
          ></iframe>
          <div className="cv-buttons">
            <a href={cvPreview} download="NouriMorouche_CV.pdf" className="btn-download">
              📄 {t("downloadCV")}
            </a>
            <a href="/cv" className="btn-view">
              🔍 {t("viewFullCV")}
            </a>
          </div>
        </div>

        <div className="card technologies">
          <h2>{t("technologies")}</h2>
          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-item">
                {tech.icon}
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Parcours;
