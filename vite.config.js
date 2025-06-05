// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/atomiclyrics/',        // add this line
  plugins: [react()],
  build: { outDir: 'dist' },
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.js'
  }
})

