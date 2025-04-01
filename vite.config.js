import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // ✅ Important pour éviter le 404 lors du serve -s dist
  server: {
    port: 4000,
    open: true,
    strictPort: true,
    historyApiFallback: true, // ✅ Pas nécessaire avec Vite mais OK pour du preview custom
  },
  preview: {
    port: 3000,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
