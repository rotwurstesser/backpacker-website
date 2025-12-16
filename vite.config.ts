/// <reference types="vitest" />
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    fs: {
      allow: ['content']
    }
  },
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
    environment: 'node'
  }
});
