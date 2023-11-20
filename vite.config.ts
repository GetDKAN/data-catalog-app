import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build/static',
      manifest: true,
    },
    plugins: [react()],
    server: {
      port: 3000,
      proxy: {
        '/api/1': {
          target: 'https://demo.getdkan.org',
          changeOrigin: true,
        }
      }
    }
  }
})