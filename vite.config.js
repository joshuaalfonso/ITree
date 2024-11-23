import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/itree/',
  server: {
    host: '0.0.0.0',  // Bind to all interfaces
    port: 3000,       // Optional: specify the port you want (default is 3000)
  }
})
