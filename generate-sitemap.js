import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream, existsSync, mkdirSync } from "fs";
import { Readable } from "stream";

async function generateSitemap() {
  const links = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/cv", changefreq: "monthly", priority: 0.7 },
    { url: "/politique", changefreq: "yearly", priority: 0.5 }
  ];

  const stream = new SitemapStream({ hostname: "https://nmoroucheportfolio.fr" });

  const sitemap = await streamToPromise(Readable.from(links).pipe(stream));

  if (!existsSync("./public")) {
    mkdirSync("./public");
  }

  const writeStream = createWriteStream("./public/sitemap.xml");
  writeStream.write(sitemap.toString(), (err) => {
    if (err) {
      console.error("❌ Erreur lors de l’écriture du fichier sitemap.xml :", err);
    } else {
      console.log("✅ Sitemap.xml généré avec succès dans /public !");
    }
  });
}

generateSitemap().catch((err) => console.error("❌ Erreur de génération :", err));
