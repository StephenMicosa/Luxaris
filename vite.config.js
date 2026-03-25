import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    // En-têtes HTTP pour améliorer le cache navigateur et bfcache
    headers: {
      'Cache-Control': 'public, max-age=0, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
  },
  build: {
    // Activer minification et tree-shaking
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Activer code splitting pour mieux répartir les chunks
    rollupOptions: {
      output: {
        manualChunks: {
          // Séparer les librairies vendor dans des chunks distincts
          'lucide-react': ['lucide-react'],
          'react': ['react', 'react-dom', 'react-router-dom'],
          'tailwind': ['tailwindcss'],
        },
      },
    },
    // Seuil d'avertissement pour taille de chunks (en kB)
    chunkSizeWarningLimit: 1000,
  },
})
