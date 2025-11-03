import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // Plugin de React con React Compiler habilitado
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    // Plugin de TailwindCSS integrado
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // permite usar import from '@/...'
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
