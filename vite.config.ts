import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), ViteImageOptimizer()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, "./src/assets")
    }
  }
})
