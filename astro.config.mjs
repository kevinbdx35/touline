import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://votre-domaine.fr',
  base: '/touline/',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
