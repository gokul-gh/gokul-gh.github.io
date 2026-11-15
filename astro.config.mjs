import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://gokul-gh.github.io/',
  integrations: [tailwind()],
});