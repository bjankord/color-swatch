<script setup>
import { useData } from 'vitepress';
const { theme } = useData();
</script>

# Getting Started

## Installation

Color Swatch can be installed into any existing project that supports web components. You can install it with:

::: code-group

```sh [npm]
$ npm add -D color-swatch
```

```sh [yarn]
$ yarn add -D color-swatch
```

```sh [pnpm]
$ pnpm add -D color-swatch
```

```sh [bun]
$ bun add -D color-swatch
```

:::

## Usage
Usage example:
```html
<color-swatch hex="#000">
  <ul>
    <li>Name: Black</li>
    <li>Variable: $color-black</li>
  </ul>
</color-swatch>
```

<color-swatch color="#000">
  <ul>
    <li>Name: Black</li>
    <li>Variable: $color-black</li>
  </ul>
</color-swatch>
<color-swatch color="#00F">
  <ul>
    <li>Name: Blue</li>
    <li>Variable: $color-blue</li>
  </ul>
</color-swatch>

## Attributes
| Name                   | Type   | Usage |
|------------------------|--------|-------|
| `color`                | String | Accepts a valid CSS color format. e.g. `#FF0000`, `rgb(255, 0, 0)` |
| `dark-text-color`      | String | Accepts colors in short and normal hex formats. e.g. `#F00` and `#FF0000` |
| `hex`                  | String | Accepts colors in short and normal hex formats. e.g. `#F00` and `#FF0000` |
| `light-text-color`     | String | Accepts colors in short and normal hex formats. e.g. `#F00` and `#FF0000` |
| `show-contrast-info`   | Boolean | Used to control display of contrast info. |


## Properties

| Property                    |
|-----------------------------|
| `color`                     |
| `darkTextColor`             |
| `lightTextColor`            |
| `showContrastInfo`          |

## Examples

<ul>
  <li v-for="colorGroup in Object.keys(theme.colors)">
    <h2>{{colorGroup}}</h2>
    <ul>
      <li v-for="colorKey in Object.keys(theme.colors[colorGroup])">
        <color-swatch color="#f00">
          <ul>
            <li><strong>{{colorGroup}} {{colorKey}}</strong></li>
          </ul>
        </color-swatch>
      </li>
    </ul>
  </li>
</ul>
