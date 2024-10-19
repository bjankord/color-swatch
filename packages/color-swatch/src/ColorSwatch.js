import Color from 'colorjs.io';

import { staticStyles } from './styles.js';

const render = x => `<div part="cs-swatch" class="cs-swatch" style="background-color: ${x.colorValue};">
  <div part="cs-contrast-info" class="${(x.getAttribute('show-contrast-info') !== null) ? `` : `hide`}">
    <div part="cs-contrast-info-container">
      <dl part="cs-contrast-list" title="Large Text Contrast ${x.contrastInfo.largeText.lightText.ratio}">
        <dt part="cs-large-light-text" style="color: ${x.lightTextColor};">AA</dt>
        <dd part="cs-large-light-text-status">${x.renderContrastPassFail(x.contrastInfo.largeText.lightText.status)}</dd>
      </dl>
      <dl part="cs-contrast-list" title="Normal Text Contrast ${x.contrastInfo.normalText.lightText.ratio}">
        <dt part="cs-normal-light-text" style="color: ${x.lightTextColor};">AA</dt>
        <dd part="cs-normal-light-text-status">${x.renderContrastPassFail(x.contrastInfo.normalText.lightText.status)}</dd>
      </dl>
    </div>
    <div part="cs-contrast-info-container">
      <dl part="cs-contrast-list" title="Large Text Contrast ${x.contrastInfo.largeText.darkText.ratio}">
        <dt part="cs-large-dark-text" style="color: ${x.darkTextColor};">AA</dt>
        <dd part="cs-large-dark-text-status">${x.renderContrastPassFail(x.contrastInfo.largeText.darkText.status)}</dd>
      </dl>
      <dl part="cs-contrast-list" title="Normal Text Contrast ${x.contrastInfo.normalText.darkText.ratio}">
        <dt part="cs-normal-dark-text" style="color: ${x.darkTextColor};">AA</dt>
        <dd part="cs-normal-dark-text-status">${x.renderContrastPassFail(x.contrastInfo.normalText.darkText.status)}</dd>
      </dl>
    </div>
  </div>
</div>
<div part="cs-body">
  <div part="cs-slot">
    <slot />
  </div>
  <button type="button" part="cs-contrast-toggle" class="cs-contrast-toggle" title="Toggle Contrast Info">
    <span part="cs-visually-hidden">Toggle Contrast Info</span>
    <svg style="width: 1em; height: 1em; vertical-align: middle; fill: #000; overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M981.333333 512c0 260.266667-170.666667 469.333333-469.333333 469.333333L512 42.666667C810.666667 42.666667 981.333333 251.733333 981.333333 512z"  />
      <path d="M512 1024c-25.6 0-42.666667-17.066667-42.666667-42.666667L469.333333 42.666667c0-25.6 17.066667-42.666667 42.666667-42.666667 302.933333 0 512 209.066667 512 512S814.933333 1024 512 1024zM554.666667 85.333333 554.666667 938.666667c264.533333-21.333333 384-221.866667 384-426.666667S819.2 106.666667 554.666667 85.333333z"  />
      <path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0c25.6 0 42.666667 17.066667 42.666667 42.666667l0 938.666667C554.666667 1006.933333 537.6 1024 512 1024zM469.333333 85.333333C256 110.933333 85.333333 290.133333 85.333333 512s170.666667 401.066667 384 426.666667L469.333333 85.333333z"  />
    </svg>
  </button>
</div>`;

class ColorSwatch extends HTMLElement {
  static get observedAttributes() {
    return [
      'color-value',
      'light-text-color',
      'dark-text-color',
      'show-contrast-info',
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Bind event handlers
    this.handleContrastToggle = this.handleContrastToggle.bind(this);

    this.colorValue = this.getAttribute('color-value'); // this.getAttribute('color') || 
    console.log('this.colorValue', this.colorValue);
    this.lightTextColor = this.getAttribute('light-text-color') || '#ffffff';
    this.darkTextColor = this.getAttribute('dark-text-color') || '#000000';
    this.showContrastInfo = this.getAttribute('show-contrast-info') ? Boolean(this.getAttribute('show-contrast-info')) : false;
    this.contrastInfo;

    /**
     * CSS
     * Only append CSS to head if we haven't already added the stylesheet
     * Avoids duplicated styles when multiple color-swatches are added to the page
     */
    if (!(document.querySelector('#color-swatch-styles'))) {
      const styles = document.createElement('style');
      styles.type = 'text/css';
      styles.id = 'color-swatch-styles';
      styles.textContent = staticStyles;

      const head = document.getElementsByTagName('head')[0];
      head.appendChild(styles);
    }
  }

  get showContrastInfo() {
    return this.getAttribute('show-contrast-info');
  }

  set showContrastInfo(val) {
    if(val) {
      this.setAttribute('show-contrast-info', val);
    } else {
      this.removeAttribute('show-contrast-info');
    }
  }

  determineContrast() {
    const swatchColor = new Color(this.colorValue);
    const lightTextColor = new Color(this.lightTextColor);
    const darkTextColor = new Color(this.darkTextColor);
    const lightTextColorContrast = swatchColor.contrast(lightTextColor, "WCAG21");
    const darkTextColorContrast = swatchColor.contrast(darkTextColor, "WCAG21");

    const WCAG21LargeTextContrast = 3;
    const WCAG21NormalTextContrast = 4.5;

    const determineContrastStatus = (contrastResult, accessibleContrastAmount) => contrastResult >= accessibleContrastAmount ? 'pass' : 'fail';

    const formatContrastRatio = (result) => {
      const resultString = `${result}`;
      const length = 4;
      if (resultString.length > length) {
        return `${resultString.substring(0, length)}:1`;
      } else {
        return `${resultString}:1`;
      }
    }

    return {
      largeText: {
        lightText: {
          status: determineContrastStatus(lightTextColorContrast, WCAG21LargeTextContrast),
          ratio: formatContrastRatio(lightTextColorContrast),
        },
        darkText: {
          status: determineContrastStatus(darkTextColorContrast, WCAG21LargeTextContrast),
          ratio: formatContrastRatio(darkTextColorContrast),
        },
      },
      normalText: {
        lightText: {
          status: determineContrastStatus(lightTextColorContrast, WCAG21NormalTextContrast),
          ratio: formatContrastRatio(lightTextColorContrast),
        },
        darkText: {
          status: determineContrastStatus(darkTextColorContrast, WCAG21NormalTextContrast),
          ratio: formatContrastRatio(darkTextColorContrast),
        },
      }
    }
  }

  renderContrastPassFail(status) {
    if (status === 'pass') {
      return '✅ Pass';
    }
    return '❌ Fail';
  }

  handleContrastToggle() {
    const showContrastInfo = Boolean(this.showContrastInfo);
    // This may not be needed?
    // this.contrastInfo = this.determineContrast();
    this.showContrastInfo = !showContrastInfo;
  }

  connectedCallback(){
    const toggleBtn = this.shadowRoot.querySelector('[part="cs-contrast-toggle"]');
    toggleBtn.addEventListener('click', this.handleContrastToggle);
  }

  disconnectedCallback() {
    const toggleBtn = this.shadowRoot.querySelector('[part="cs-contrast-toggle"]');
    toggleBtn.removeEventListener('click', this.handleContrastToggle);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('attributeChangedCallback', { name, oldValue, newValue } );
    const hyphenCaseToCamelCase = (str) => {
      return str.replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase();
      });
    }

    if (newValue !== oldValue) {
      const property = hyphenCaseToCamelCase(name);
      // Update local data to new attribute value when changed
      // convert name from snake-case to camelCase then set the new value like below
      this[property] = newValue;
      this.contrastInfo = this.determineContrast();
      this.shadowRoot.innerHTML = render(this);

      // Re-add event listener when DOM is updated
      const toggleBtn = this.shadowRoot.querySelector('[part="cs-contrast-toggle"]');
      toggleBtn.addEventListener('click', this.handleContrastToggle);
    }
  }
}

alert('test 2');

window.customElements.get("color-swatch") || window.customElements.define("color-swatch", ColorSwatch);