import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    // Use /v3gifteddreamers/ for GitHub Pages, or '/' for root domain deployment
    const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
    return {
      base: isGitHubPages ? '/v3gifteddreamers/' : '/',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
