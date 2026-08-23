import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'http://example.com', // set your production site URL later
  integrations: [react()],
  // Note: removed custom esbuild loader mappings that caused transform issues.
  // If React components use JSX in .js files, consider renaming to .jsx or
  // adding specific Vite config later rather than globally remapping loaders.
});
