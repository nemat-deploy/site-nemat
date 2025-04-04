import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Optional: Change if needed
    open: true,  // Optional: Auto-open browser
  },
  resolve: {
    alias: {
      '@': '/src', // Optional: Enables @ alias for imports
    },
  },
  build: {
    outDir: 'dist',
  },
  define: {
    'process.env': {},
  },
});
