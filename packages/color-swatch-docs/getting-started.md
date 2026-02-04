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

Check out the [examples](/examples) for additional configurations.
