import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
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
        quality: 60,
      },
    }),
  ],
  base: '/landing-page/',
});
