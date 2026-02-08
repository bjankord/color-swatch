import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.js'),
      name: 'ColorSwatch',
      formats: ['es'],
      fileName: (format) => `color-swatch.${format}.js`
    },
  },
})