import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { Plugin } from 'vite';

// Plugin to inject CSS preload links to break critical request chain
// This allows CSS to download in parallel with HTML parsing, not sequentially
function cssPreloadPlugin(): Plugin {
  let cssFileName: string | null = null;
  
  return {
    name: 'css-preload',
    generateBundle(options, bundle) {
      // Find CSS file in bundle during build
      const cssFiles = Object.keys(bundle).filter((fileName) => 
        fileName.endsWith('.css')
      );
      if (cssFiles.length > 0) {
        const cssAsset = bundle[cssFiles[0]] as any;
        cssFileName = cssAsset.fileName || cssFiles[0];
      }
    },
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        // Add preload link for CSS BEFORE the stylesheet link
        // Must match exact path format that Vite uses (absolute path with /)
        // Include crossorigin to match Vite's stylesheet link
        if (cssFileName) {
          // Ensure absolute path (starts with /)
          const href = cssFileName.startsWith('/') ? cssFileName : `/${cssFileName}`;
          const preloadLink = `    <link rel="preload" as="style" href="${href}" crossorigin>`;
          
          // Find where Vite injects the stylesheet link and insert preload BEFORE it
          // This ensures the preload is used immediately when stylesheet link is found
          const stylesheetPattern = /<link[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']*\/assets\/css\/[^"']*\.css)["'][^>]*>/i;
          const match = html.match(stylesheetPattern);
          
          if (match) {
            // Insert preload link right BEFORE the stylesheet link
            return html.replace(match[0], `${preloadLink}\n${match[0]}`);
          }
          
          // Fallback: insert before </head>
          return html.replace('</head>', `${preloadLink}\n  </head>`);
        }
        return html;
      },
    },
  };
}

export default defineConfig(({ mode }) => {
    const isProduction = mode === 'production';
    
    return {
      base: '/',
      server: {
        port: 3000,
        host: '0.0.0.0',
        allowedHosts: ['3000-icy05hrjm3itezj3j337a-94580408.sg1.manus.computer'],
      },
      plugins: [react(), cssPreloadPlugin()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        // Target modern browsers (ES2020+) to avoid legacy JavaScript
        target: 'es2020',
        // Enable minification
        minify: 'terser',
        terserOptions: {
          compress: {
            drop_console: isProduction, // Remove console.log in production
            drop_debugger: isProduction,
          },
          format: {
            // Remove comments and unnecessary whitespace
            comments: false,
          },
        },
        // Code splitting configuration
        rollupOptions: {
          output: {
            manualChunks: (id) => {
              // Separate vendor chunks for better caching
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
        // CSS code splitting - extract CSS into separate file
        cssCodeSplit: true,
        // Minify CSS
        cssMinify: isProduction,
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
