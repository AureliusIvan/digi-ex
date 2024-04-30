import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // change server to 127.0.0.1:8000
  server: {
    host: 'localhost',
    port: 8000,
  },
})
