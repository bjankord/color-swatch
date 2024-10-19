import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Color Swatch",
  description: "A web component for displaying color swatches",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Examples', link: '/examples' }
    ],

    // sidebar: [
    //   {
    //     text: 'Navigation',
    //     items: [
    //       { text: 'Getting Started', link: '/getting-started' },
    //       { text: 'Examples', link: '/examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bjankord/color-swatch' }
    ],
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.includes('-')
        }
      },
    }
  }
})
