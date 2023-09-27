import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      verbose: false,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  // Default and port default
  base: '/',
  server: {
    port: 3000,
  },

  resolve: {
    alias: {
      '@': resolve(fileURLToPath(new URL('./src/', import.meta.url))),
    },
  },
});
