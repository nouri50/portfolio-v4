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

      <h2 className="section-title">{t("contactMe")}</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder={t("name")} value={formData.name} onChange={handleChange} required aria-label={t("name")} />
        <input type="email" name="email" placeholder={t("email")} value={formData.email} onChange={handleChange} required aria-label={t("email")} />
        <textarea name="message" placeholder={t("message")} value={formData.message} onChange={handleChange} required aria-label={t("message")}></textarea>
        <button type="submit" className="cta-button">{t("send")}</button>
      </form>
    </section>
  );
}

export default Contact;
