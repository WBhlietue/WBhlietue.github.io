// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://wbhlietue.github.io',
  base: '/',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },
});
