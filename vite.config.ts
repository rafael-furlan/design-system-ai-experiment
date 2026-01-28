import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all addresses
    port: 5173,
    strictPort: false, // Try next available port if 5173 is taken
    open: true, // Automatically open browser
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
