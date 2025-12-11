import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 1. Load env file based on mode in the current working directory.
  // The third parameter '' loads all env vars, regardless of prefix.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), tailwindcss()],
    server: {
      port: 3000,
      proxy: {
        '/api': {
          // 2. Access the variable from the loaded 'env' object
          target: env.BACKEND_URL || 'http://localhost:5000', 
          changeOrigin: true,
        },
      }
    }
  }
})