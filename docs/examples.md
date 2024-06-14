<script setup>
import { useData } from 'vitepress';
const { theme } = useData();
</script>

<pre>{{ theme.colors }}</pre>

<ul>
  <li v-for="colorGroup in Object.keys(theme.colors)">
    <h2>{{colorGroup}}</h2>
    <ul>
      <li v-for="colorKey in Object.keys(theme.colors[colorGroup])">
        <color-swatch :color="theme.colors[colorGroup][colorKey]">
          <ul>
            <li><strong>{{colorGroup}} {{colorKey}}</strong></li>
            <li>Variable: ${{colorGroup}}-{{colorKey}}</li>
          </ul>
        </color-swatch>
      </li>
    </ul>
  </li>
</ul>

# Color Swatch Examples

Examples of Color Swatch

<color-swatch color="#000">
  <ul>
    <li>Name: Black</li>
    <li>Variable: $color-black</li>
  </ul>
</color-swatch>
