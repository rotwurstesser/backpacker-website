/// <reference types="vitest" />
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type UserConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    fs: {
      allow: ['content']
    }
  },
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
    environment: 'happy-dom',
    setupFiles: ['./src/setupTest.ts'],
    globals: true,
    server: {
      deps: {
        inline: ['@testing-library/dom']
      }
    }
  }
} as UserConfig & { test?: any });
