# 🎨 color-swatch

A **web component** for displaying color swatches, with optional **WCAG contrast checks** for light/dark text.

This repo is a small monorepo:

- `packages/color-swatch`: the custom element library (`<color-swatch>`)
- `packages/color-swatch-docs`: VitePress documentation site

## Features

- Custom element: `<color-swatch>`
- Accepts a `color-value` (hexadecimal supported by [colorjs.io](https://colorjs.io/))
- Optional contrast panel with pass/fail indicators for large and normal text sizes
- Slot support for your own label/metadata

## Quick Start (consumer usage)

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

| Attribute | Type | Default | Description |
|---|---:|---:|---|
| `color-value` | string | (required) | The swatch background color value. |
| `color-name` | string | - | Display name shown in the footer. |
| `light-text-color` | string | `#ffffff` | Color used for “light text” contrast calculation. |
| `dark-text-color` | string | `#000000` | Color used for “dark text” contrast calculation. |
| `show-contrast-info` | boolean-ish | `false` | Show contrast info panel. Use `show-contrast-info="true"` to enable. |

Notes:

- To show contrast info, set `show-contrast-info="true"`.
- To hide it again, remove the attribute.

### Slot

Any child content is rendered in the body area (e.g., a variable name, label, or metadata).

## Repo Development

### Prerequisites

- Node.js 18+ (recommended)
- npm (repo uses npm workspaces)

### Install

From the repo root:

```bash
npm install
```

### Run docs site (VitePress)

```bash
npm run dev
```

This runs the `color-swatch-docs` workspace.

### Run unit tests

```bash
npm test
```

### Work on the component package directly

Start the Vite dev server in the component workspace:

```bash
npm run dev --workspace packages/color-swatch
```

Build the library bundle:

```bash
npm run build --workspace packages/color-swatch
```

## Docs

The VitePress content lives in `packages/color-swatch-docs/`:

- `getting-started.md`
- `examples.md`
- `docs.md`

## License

MIT — see [LICENSE](https://github.com/bjankord/color-swatch/blob/main/LICENSE).
