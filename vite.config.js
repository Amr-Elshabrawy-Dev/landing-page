import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  base: '/landing-page/',
  build: {
    sourcemap: true,
  },
  server: {
    open: true,
  },
  plugins: [
    react(),
    svgr(),
    ViteImageOptimizer({
      webp: {
        quality: 100,
      },
    }),
  ],
});
