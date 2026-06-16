import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeManifestIcons: false,
      manifest: {
        name: 'Morocco — Our Family Journey',
        short_name: 'Morocco Trip',
        description: 'Offline family companion for our Morocco trip',
        start_url: '/morocco-family-trip/',
        scope: '/morocco-family-trip/',
        display: 'standalone',
        orientation: 'portrait-primary',
        theme_color: '#a8492d',
        background_color: '#f7f0e5',
        icons: [
          {
            src: 'pwa-icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-icons/icon-maskable-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{html,js,css,svg,png,jpg,jpeg,webp,webmanifest}'],
        navigateFallback: '/morocco-family-trip/index.html',
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
      },
    }),
  ],
  base: '/morocco-family-trip/',
})
