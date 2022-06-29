import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

const ASSET_URL = process.env.ASSET_URL || '';

// https://vitejs.dev/config/
export default defineConfig({
  // 'base': `${ASSET_URL}/docs/`,
  'build': {
    'outDir': 'docs'
  },
  'plugins': [svelte()]
});
