// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/nelkuba-main-site/', // <- IMPORTANT: use your repo name here with slashes
})
