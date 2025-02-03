import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000, // Mets le port que tu veux
    open: true,  // Ouvre automatiquement le navigateur
  },
  plugins: [], // Ajoute ici tes plugins si besoin
});
