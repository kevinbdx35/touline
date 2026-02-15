import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import compress from '@playform/compress';
import compressor from 'astro-compressor';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://kevinbdx35.github.io',
  base: '/touline/',
  prefetch: true,
  integrations: [
    react(),
    sitemap(),
    robotsTxt(),
    icon(),
    compress(),
    compressor(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
