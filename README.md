# color-swatch

[![NPM version](http://img.shields.io/npm/v/color-swatch.svg)](https://www.npmjs.com/package/color-swatch)

[color-swatch component README](https://github.com/bjankord/color-swatch/blob/main/packages/color-swatch/README.md)

## Repo Development

Notes for developers working on this project

### Prerequisites

- Node.js 20+ (recommended)
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
