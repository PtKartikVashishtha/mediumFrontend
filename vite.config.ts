import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  // For dev server history fallback
  server: {
    // No historyApiFallback needed; Vite handles SPA fallback by default
  },

  // For production build base
  base: '/',

  build: {
    // Output dir can stay default or customize if you want
    outDir: 'dist',
    rollupOptions: {
      // Make sure all routes fallback to index.html
      input: '/index.html',
    }
  }
})
