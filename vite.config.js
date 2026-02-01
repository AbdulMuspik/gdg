import { resolve } from 'path';
import { defineConfig } from 'vite';

// Vite config for production deployment
export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        members: resolve(__dirname, 'members.html'),
      },
    },
  }
});
