<style>
  .example {
    color: #000;
  }
</style>

# Examples

## Swatch using default light and dark text colors

<div class="example">
<color-swatch color-value="#F34F1c" color-name="Red"></color-swatch>

```html
<color-swatch color-value="#F34F1c" color-name="Red"></color-swatch>
```
</div>

## Swatch with custom text colors

<div class="example">
<color-swatch
  id="custom-text-colors"
  color-value="#ffba01"
  color-name="Yellow"
  light-text-color="#f471f8"
  dark-text-color="#1d049d"
></color-swatch>

```html
<color-swatch
  id="custom-text-colors"
  color-value="#ffba01"
  color-name="Yellow"
  light-text-color="#f471f8"
  dark-text-color="#1d049d"
></color-swatch>
```
</div>

## Swatch with contrast info shown by default

<div class="example">
<color-swatch
  id="contrast-visible"
  color-value="#7FBC00"
  color-name="Green"
  show-contrast-info="true"
></color-swatch>

```html
<color-swatch
  id="contrast-visible"
  color-value="#7FBC00"
  color-name="Green"
  show-contrast-info="true"
></color-swatch>
```
</div>

## Swatch with slot content

<div class="example">
<color-swatch id="dynamic-swatch" color-value="#01a6f0">
Variable: $blue-10
</color-swatch>

```html
<color-swatch id="dynamic-swatch" color-value="#01a6f0">
Variable: $blue-10
</color-swatch>
```
</div>

Check out the [docs](/docs) for full component documentation.
