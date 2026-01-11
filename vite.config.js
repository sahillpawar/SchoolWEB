import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  // Use '/' for local development (serve), '/SchoolWEB/' for production builds (GitHub Pages)
  const base = command === 'serve' ? '/' : '/SchoolWEB/'
  
  return {
    plugins: [react()],
    base: base,
  }
})
