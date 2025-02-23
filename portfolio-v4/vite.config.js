import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
    open: true,
    strictPort: true,
    historyApiFallback: true, // 🔥 Évite les erreurs 404 sur React Router
  },
  preview: {
    port: 3000,
    historyApiFallback: true, // 🔥 Correction aussi en mode "preview"
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
