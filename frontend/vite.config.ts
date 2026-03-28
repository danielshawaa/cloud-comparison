import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// When deploying to GitHub Pages the app lives at /<repo-name>/.
// Set VITE_BASE_PATH in the GitHub Actions workflow (or .env.production)
// to match your repository name, e.g. VITE_BASE_PATH=/cloud-service-comparison/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH ?? '/',
  server: {
    port: 5173,
  },
})
