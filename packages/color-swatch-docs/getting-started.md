# Getting Started

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

Once you have the color swatch package installed, you can import the web component into you app. This will add `color-swatch` to the `window.customElements` definitions

```js
import 'color-swatch';
```

Then you can start using it in your project.

```html
<color-swatch color-value="#F00">
  <ul>
    <li><strong>Red</strong></li>
    <li>Variable: $color-red</li>
  </ul>
</color-swatch>
```

<div style="color: #000">
<color-swatch color-value="#F00">
  <ul>
    <li><strong>Red</strong></li>
    <li>Variable: $color-red</li>
  </ul>
</color-swatch>
</div>