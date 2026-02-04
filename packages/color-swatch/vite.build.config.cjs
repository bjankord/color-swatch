const path = require('node:path');
const { defineConfig } = require('vite');

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.js'),
      name: 'ColorSwatch',
      formats: ['es'],
      fileName: (format) => `color-swatch.${format}.js`
    },
  },
})