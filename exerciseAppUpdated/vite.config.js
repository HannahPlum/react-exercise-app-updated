import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/react-exercise-app-updated/', // Update this to match your GitHub repo name
})
