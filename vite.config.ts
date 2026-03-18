import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'jsdom',
    globals: true, // This lets you use 'describe' and 'it' without importing them
    setupFiles: './src/test/setup.ts',
  },
  resolve: {
    alias: {
      '#components': resolve(
        dirname(fileURLToPath(import.meta.url)),
        'src/components',
      ),
      '#constants': resolve(
        dirname(fileURLToPath(import.meta.url)),
        'src/constants',
      ),
      '#store': resolve(dirname(fileURLToPath(import.meta.url)), 'src/store'),
      '#hoc': resolve(dirname(fileURLToPath(import.meta.url)), 'src/hoc'),
      '#windows': resolve(
        dirname(fileURLToPath(import.meta.url)),
        'src/windows',
      ),
    },
  },
});
