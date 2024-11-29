import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind({
    // Example: Disable injecting a basic `base.css` import on every page
    applyBaseStyles: false,
  })],
});
