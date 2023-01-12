import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://elliotanthony39.github.io/todo-frontend-react-rtk/",
  plugins: [react()],
})
