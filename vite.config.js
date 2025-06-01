import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true, // ✅ Active la PWA en mode dev
      },
      includeAssets: [
        'favicon.ico',
        'favicon.svg',
        'apple-touch-icon.png',
        'android-icon-192x192.png',
        'android-icon-512x512.png'
      ],
      manifest: {
        name: 'Portfolio Nouri Morouche',
        short_name: 'Portfolio',
        description: 'Mon portfolio développeur web',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/android-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: '/favicon-96x96.png',
            sizes: '96x96',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});
