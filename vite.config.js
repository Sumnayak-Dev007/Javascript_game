import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // Tells Vite to use the "src" folder as the root
  base: '/',  // Ensures correct paths in production
  build: {
    outDir: '../dist',  // Ensures the built files go into "dist"
    emptyOutDir: true,
    rollupOptions: {
      input: 'src/index.html',  // Ensures correct file resolution
    },
  },
});
