import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: tag => tag === 'color-swatch',
      },
    },
  },
  title: "Color Swatch",
  description: "A simple web component for displaying color swatches and related contrast info",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/examples' }
    ],

    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'Getting Started', link: '/' },
          { text: 'Examples', link: '/examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bjankord/color-swatch' }
    ],
    colors: {
      'catalina-blue': {
          '50': '#e8f6ff',
          '100': '#d6edff',
          '200': '#b5ddff',
          '300': '#88c4ff',
          '400': '#5a9dff',
          '500': '#3475ff',
          '600': '#1249ff',
          '700': '#083dfa',
          '800': '#0a36c9',
          '900': '#13369c',
          '950': '#0e2571',
      },
    }
  },
})
