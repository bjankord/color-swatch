# Getting Started

[![NPM version](http://img.shields.io/npm/v/color-swatch.svg)](https://www.npmjs.com/package/color-swatch)


::: code-group

```js [npm]
npm install color-swatch
```

```js [yarn]
yarn add color-swatch
```

```js [pnpm]
pnpm install color-swatch
```

:::

Once you have the color swatch package installed, you can import the web component into your app. This will add `color-swatch` to the `window.customElements` definitions.

```js
import 'color-swatch';
```

Then you can start using it in your project.

```html
<color-swatch color-value="#562a99" color-name="Purple">
  Variable: $color-purple
</color-swatch>
```

<div style="color: #000">
<color-swatch color-value="#562a99" color-name="Purple">
  Variable: $color-purple
</color-swatch>
</div>

Clicking on the toggle contrast icon in the color swatch displays indicators for the pass/fail status of the provided light and dark text colors for normal and large text sizes.

[WCAG Color Contrast Guidelines](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html):
* Normal Text (1.4.3): Minimum 4.5:1 ratio for standard text, ensuring readability for users with low vision.
* Large Text (1.4.3): Minimum 3:1 ratio for text that is 18 point (typically 24px) or larger, or 14 point (typically 18.5px) and bold.

Check out the [examples](/examples) for additional configurations.
