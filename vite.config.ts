import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Certifique-se de ter instalado @types/node

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});