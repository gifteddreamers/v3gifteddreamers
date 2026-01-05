import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const isProduction = mode === 'production';
    
    return {
      base: '/',
      server: {
        port: 3000,
        host: '0.0.0.0',
        allowedHosts: ['3000-icy05hrjm3itezj3j337a-94580408.sg1.manus.computer'],
      },
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        // Enable minification
        minify: 'terser',
        terserOptions: {
          compress: {
            drop_console: isProduction, // Remove console.log in production
            drop_debugger: isProduction,
          },
        },
        // Code splitting configuration
        rollupOptions: {
          output: {
            manualChunks: (id) => {
              // Separate vendor chunks
              if (id.includes('node_modules')) {
                if (id.includes('react') || id.includes('react-dom')) {
                  return 'vendor-react';
                }
                if (id.includes('react-router')) {
                  return 'vendor-router';
                }
                if (id.includes('lucide-react')) {
                  return 'vendor-icons';
                }
                return 'vendor';
              }
            },
            // Optimize chunk file names
            chunkFileNames: 'assets/js/[name]-[hash].js',
            entryFileNames: 'assets/js/[name]-[hash].js',
            assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
          },
        },
        // Increase chunk size warning limit
        chunkSizeWarningLimit: 1000,
        // Disable source maps in production for smaller bundles
        sourcemap: false,
      },
      // Optimize dependencies
      optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom'],
      },
    };
});
