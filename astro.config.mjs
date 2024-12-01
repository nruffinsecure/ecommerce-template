// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind({
    config: { path: './tailwind.config.cjs' },
    applyBaseStyles: false
  })],
  output: 'static',  // Add this for static site generation
  server: {
    host: true  // Add this to ensure proper network access
  }
});
