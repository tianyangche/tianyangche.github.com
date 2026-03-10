import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/' : '/',
  server: {
    https: mode === 'https',
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
}))
