import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',  // This sets the root directory to src/
  build: {
    outDir: '../dist',  // Output the build files to the dist folder (outside src/)
    emptyOutDir: true,  // Clean the dist folder before building
  },
});

