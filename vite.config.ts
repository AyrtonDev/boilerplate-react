/// <reference types="vitest" />

import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Isso é necessário para que o Storybook encontre o arquivo preview.tsx
      '@storybook/react': '@storybook/react/dist/cjs',
    },
  },
  optimizeDeps: {
    include: [
      '@storybook/addon-actions',
      '@storybook/addon-knobs',
      '@storybook/addon-links',
      '@storybook/addon-storysource',
    ],
  },
  server: {
    fs: {
      // Isso é necessário para que o Storybook encontre os arquivos MDX
      allow: [path.resolve(__dirname, './src')],
    },
  },
  root: '.',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./.test/setup.js'],
    include: ['**/*(*.)?{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],
  },
});
