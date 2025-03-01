import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { Readable } from "stream";

async function generateSitemap() {
  const links = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/#parcours", changefreq: "weekly", priority: 0.9 },
    { url: "/#services", changefreq: "weekly", priority: 0.9 },
    { url: "/#projects", changefreq: "weekly", priority: 0.9 },
    { url: "/#contact", changefreq: "monthly", priority: 0.8 },
    { url: "/cv", changefreq: "monthly", priority: 0.8 },
    { url: "/politique", changefreq: "yearly", priority: 0.5 }
  ];

  const stream = new SitemapStream({ hostname: "https://nmoroucheportfolio.fr" });

  const sitemap = await streamToPromise(Readable.from(links).pipe(stream));

  await new Promise((resolve, reject) => {
    const writeStream = createWriteStream("./public/sitemap.xml");
    writeStream.write(sitemap.toString(), (err) => {
      if (err) reject(err);
      else resolve();
    });
  });

  console.log("✅ Sitemap généré avec succès !");
}

generateSitemap().catch((err) => console.error("❌ Erreur lors de la génération :", err));
