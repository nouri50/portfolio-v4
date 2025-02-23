import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:nourimorouche@sfr.fr?subject=${t("messageFrom")} ${formData.name}&body=${encodeURIComponent(
      `${t("name")}: ${formData.name}\n${t("email")}: ${formData.email}\n\n${t("message")}:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="section contact fade-in" aria-label={t("contactSection")}>
      <Helmet>
        <title>{t("contactTitle")}</title>
        <meta name="description" content={t("contactDescription")} />
      </Helmet>

      {/* 🔹 Correction de l'affichage du titre */}
      <h2 className="section-title">{t("contactTitle")}</h2> 

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">{t("name")}</label>
        <input type="text" id="name" name="name" placeholder={t("name")} value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">{t("email")}</label>
        <input type="email" id="email" name="email" placeholder={t("email")} value={formData.email} onChange={handleChange} required />

        <label htmlFor="message">{t("message")}</label>
        <textarea id="message" name="message" placeholder={t("message")} value={formData.message} onChange={handleChange} required></textarea>

        <button type="submit" className="cta-button">{t("send")}</button>
      </form>
    </section>
  );
}

export default Contact;
