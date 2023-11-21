import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build/static',
      manifest: true,
      rollupOptions: {
        output: {
          entryFileNames: `js/[name].js`,
          chunkFileNames: `js/chunks/[name].[hash].js`,
          assetFileNames: ({name}) => {           
            if (/\.css$/.test(name ?? '')) {
                return `css/[name].[ext]`;   
            }
            // default value
            return 'media/[name].[ext]';
          },
        },
      }
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