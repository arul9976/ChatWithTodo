import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],

  base: '/ChatWithTodo/',
  server: {
    host: '0.0.0.0', // Or any desired host/IP
  },
})
