import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jesus-chacon.github.io/',
  vite: {
    plugins: [tailwindcss()],
  },
});
