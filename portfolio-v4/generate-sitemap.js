const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

async function generateSitemap() {
  const links = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/projects", changefreq: "weekly", priority: 0.9 },
    { url: "/services", changefreq: "weekly", priority: 0.9 },
    { url: "/contact", changefreq: "monthly", priority: 0.8 },
    { url: "/experience", changefreq: "monthly", priority: 0.8 },
    { url: "/presentation", changefreq: "monthly", priority: 0.8 },
    { url: "/politique", changefreq: "yearly", priority: 0.5 },
    { url: "/404", changefreq: "yearly", priority: 0.1 },

  ];

  const stream = new SitemapStream({ hostname: "https://nmoroucheportfolio.fr" });

  const writeStream = createWriteStream("./public/sitemap.xml");
  stream.pipe(writeStream);

  links.forEach((link) => stream.write(link));
  stream.end();

  await streamToPromise(stream);
  console.log("✅ Sitemap généré avec succès !");
}

generateSitemap().catch((err) => console.error("Erreur lors de la génération :", err));
