import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  css: {
    postcss: { plugins: [] }
  },
  resolve: {
    alias: {
      '@bbd-seyoung/headless-calendar': resolve(__dirname, '../dist')
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'date-fns'],
    exclude: ['@bbd-seyoung/headless-calendar']
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
});
