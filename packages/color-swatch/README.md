# 🎨 color-swatch

[![NPM version](http://img.shields.io/npm/v/color-swatch.svg)](https://www.npmjs.com/package/color-swatch)

A **web component** for displaying color swatches, with optional **WCAG contrast checks** for light/dark text.

## Features

- Custom element: `<color-swatch>`
- Accepts a hexadecimal `color-value` (supported by [colorjs.io](https://colorjs.io/))
- Optional contrast panel with pass/fail indicators for large and normal text sizes
- Slot support for your own label/metadata

## Quick Start

Install the package:

```bash
npm install color-swatch
```

Register the custom element (once, somewhere in your app entry):

```js
import 'color-swatch';
```

Use it in HTML:

```html
<color-swatch color-value="#562a99" color-name="Purple">
	Variable: $color-purple
</color-swatch>
```

## API

### Attributes

## Attributes & Properties

| Attribute | Property | Property type | Default value | Description |
|-----------|----------|---------------|---------------|-------------|
| `color-value` | `colorValue` | `string` | - | The current color value. |
| `color-name` | `colorName` | `string` | - | The current color name. |
| `light-text-color` | `lightTextColor` | `string` | `#ffffff` | The color value to use for light text calculation. |
| `dark-text-color` | `darkTextColor` | `string` | `#000000` | The color value to use for dark text calculation. |
| `show-contrast-info` | `showContrastInfo` | `string` | - | Determines if the contrast info is displayed or not. |

Notes:

- To show contrast info, set `show-contrast-info="true"`.


### Slot

Any child content is rendered in the body area (e.g., a variable name, label, or metadata).