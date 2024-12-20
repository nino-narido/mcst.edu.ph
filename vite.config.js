import { defineConfig } from 'vite';

export default defineConfig({
  // Configuration options (if needed)
  css: {
    postcss: './postcss.config.js',
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'src/about.html', // Add additional HTML files here
      },
    },
  },
});