import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Only import the color-swatch component on the client side
    // This prevents "HTMLElement is not defined" errors during SSR
    if (typeof window !== 'undefined') {
      import('color-swatch')
    }
  }
}
