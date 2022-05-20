import { wcagContrastChecker } from '@mdhnpm/wcag-contrast-checker';
import { rgbStrToHex } from 'color-convertor';

// Usage: import { ColorSwatch } from 'color-swatch';
export class ColorSwatch extends HTMLElement {
// class ColorSwatch extends HTMLElement {
  static get observedAttributes() {
    return [
      'name',
      'hex',
      'rgb',
      'variable',
      'light-text-color-hex',
      'dark-text-color-hex',
      'show-contrast-info'
    ];
  }

  // TODO, allow show-contrast-info to just be a boolean/presence prop
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Bind event handlers
    this.handleContrastToggle = this.handleContrastToggle.bind(this);
    this.color = this.determineSwatchColor(this.getAttribute('hex'), this.getAttribute('rgb'));
    // Determine attribute to use for background color on swatch
    // TODO - Make light/darkTextColor reactive to attribute changes so if those are updated, the CSS styling that uses them is updated
    // TODO - Allow short hex values and convert to long hex for text colors
    this.lightTextColor = this.getAttribute('light-text-color-hex') || '#ffffff';
    this.darkTextColor = this.getAttribute('dark-text-color-hex') || '#000000';
    this.lightTextWCAGContrastInfo = wcagContrastChecker(this.lightTextColor, this.color);
    this.darkTextWCAGContrastInfo = wcagContrastChecker(this.darkTextColor, this.color);
    this.showContrastInfo = this.getAttribute('show-contrast-info') ? Boolean(this.getAttribute('show-contrast-info')) : false;

    // CSS
    if (!(document.querySelector('#color-swatch-styles'))) {
      const styles = document.createElement('style');
    styles.type = 'text/css';
    styles.id = 'color-swatch-styles';

    styles.textContent = `::part(cs-swatch) {
  border-radius: 5px;
  min-height: 6.250rem;
}

::part(cs-contrast-info) {
  margin-top: 4.688rem;
  padding: 0.625rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

::part(cs-contrast-info-container) {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
}


::part(cs-contrast-list) {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}

::part(cs-large-light-text-score),
::part(cs-normal-light-text-score),
::part(cs-large-dark-text-score),
::part(cs-normal-dark-text-score) {
  font-size: 0.85em;
  background: #ccc;
  border-radius: 3px;
  padding: 0.313rem 0;
  min-width: 3.375rem;
  text-align: center;
  margin: 0;
}

::part(cs-large-light-text),
::part(cs-large-dark-text) {
  font-size: 18pt;
  text-align: center;
}

::part(cs-normal-light-text),
::part(cs-normal-dark-text) {
  font-size: 14pt;
  text-align: center;
}

::part(cs-body) {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

::part(cs-info) {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

::part(cs-color-name) {
  font-size: 1.15rem;
  font-weight: 700;
}

::part(cs-contrast-toggle) {
  border: 0;
  font: inherit;
  background: transparent;
  cursor: pointer;
}

::part(cs-visually-hidden) {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}`;

      const head = document.getElementsByTagName('head')[0];
      head.appendChild(styles);
    }

    // Dynamic Styles
    const dynamicStyles = document.createElement('style');
    dynamicStyles.textContent = `:host {
  border: 10px solid #fff;
  box-sizing: border-box;
  box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.15);
  border-radius: 5px;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
}

:host([hidden]) {
  display: none
}

:host * {
  box-sizing: border-box;
}

.hide {
  visibility: hidden;
}

.swatch {
  background: ${this.color};
}

.light-text {
  color: ${this.lightTextColor};
}

.dark-text {
  color: ${this.darkTextColor};
}`;

    // HTML
    const template = document.createElement('template');
    template.innerHTML = `
      <div part="cs-swatch" class="swatch">
        <div part="cs-contrast-info" class="contrast-info ${(this.getAttribute('show-contrast-info') !== null) ? `` : `hide`}">
          <div part="cs-contrast-info-container">
            <dl part="cs-contrast-list">
              <dt part="cs-large-light-text" class="light-text">AA</dt>
              <dd part="cs-large-light-text-score">${this.renderContrastPassFail(this.lightTextWCAGContrastInfo.largeText.aa)}</dd>
            </dl>
            <dl part="cs-contrast-list">
              <dt part="cs-normal-light-text" class="light-text">AA</dt>
              <dd part="cs-normal-light-text-score">${this.renderContrastPassFail(this.lightTextWCAGContrastInfo.regularText.aa)}</dd>
            </dl>
          </div>
          <div part="cs-contrast-info-container">
            <dl part="cs-contrast-list">
              <dt part="cs-large-dark-text" class="dark-text">AA</dt>
              <dd part="cs-large-dark-text-score">${this.renderContrastPassFail(this.darkTextWCAGContrastInfo.largeText.aa)}</dd>
            </dl>
            <dl part="cs-contrast-list">
              <dt part="cs-normal-dark-text" class="dark-text">AA</dt>
              <dd part="cs-normal-dark-text-score">${this.renderContrastPassFail(this.darkTextWCAGContrastInfo.regularText.aa)}</dd>
            </dl>
          </div>
        </div>
      </div>
      <div part="cs-body">
        <div part="cs-info">
          ${(this.getAttribute('name') !== null) ? `<div part="cs-color-name" class="name">${this.getAttribute('name')}</div>` : ``}
          ${(this.getAttribute('hex') !== null) ? `<div part="cs-color-hex" class="hex">${this.getAttribute('hex')}</div>` : ``}
          ${(this.getAttribute('rgb') !== null) ? `<div part="cs-color-rgb" class="rgb">${this.getAttribute('rgb')}</div>` : ``}
          ${(this.getAttribute('variable') !== null) ? `<div part="cs-color-variable" class="variable">${this.getAttribute('variable')}</div>` : ``}
        </div>
        <button type="button" part="cs-contrast-toggle" class="contrast-toggle">
          <span part="cs-visually-hidden">Toggle Contrast Info</span>
          <svg style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M981.333333 512c0 260.266667-170.666667 469.333333-469.333333 469.333333L512 42.666667C810.666667 42.666667 981.333333 251.733333 981.333333 512z"  /><path d="M512 1024c-25.6 0-42.666667-17.066667-42.666667-42.666667L469.333333 42.666667c0-25.6 17.066667-42.666667 42.666667-42.666667 302.933333 0 512 209.066667 512 512S814.933333 1024 512 1024zM554.666667 85.333333 554.666667 938.666667c264.533333-21.333333 384-221.866667 384-426.666667S819.2 106.666667 554.666667 85.333333z"  /><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0c25.6 0 42.666667 17.066667 42.666667 42.666667l0 938.666667C554.666667 1006.933333 537.6 1024 512 1024zM469.333333 85.333333C256 110.933333 85.333333 290.133333 85.333333 512s170.666667 401.066667 384 426.666667L469.333333 85.333333z"  /></svg>
        </button>
      </div>`;

    this.shadowRoot.append(dynamicStyles, template.content.cloneNode(true));
  }

  get showContrastInfo() {
    return this.getAttribute('show-contrast-info');
  }

  set showContrastInfo(val) {
    const contrastInfo = this.shadowRoot.querySelector('.contrast-info');
    if(val) {
      this.setAttribute('show-contrast-info', val);
      contrastInfo?.classList?.remove('hide');
    } else {
      this.removeAttribute('show-contrast-info');
      contrastInfo?.classList?.add('hide');
    }
  }

  determineSwatchColor(hex, rgb) {
    if (hex) {
      // convert short hex to long hex
      if (hex?.length === 4) {
        const shortHex = hex.replace('#', '');
        const longHex = shortHex.split('').map(hexValue => hexValue + hexValue).join('');
        return `#${longHex}`;
      }
      return hex;
    }

    if (rgb) {
      if (!rgb.includes(',')) {
        const rgbVal = rgb.split(' ');
        const formattedRgb = `${rgbVal[0]}, ${rgbVal[1]}, ${rgbVal[2]}`;
        return rgbStrToHex(formattedRgb);
      }
      return rgbStrToHex(rgb);
    }

    throw Error('No hex or rgb color set');
  }

  renderContrastPassFail(contrastResult) {
    if (contrastResult) {
      return '✅ Pass';
    }
    return '❌ Fail';
  }

  handleContrastToggle() {
    // Toggle contrast info
    const showContrastInfo = Boolean(this.showContrastInfo);
    this.showContrastInfo = !showContrastInfo;
  }

  connectedCallback(){
    const toggleBtn = this.shadowRoot.querySelector('.contrast-toggle');
    toggleBtn.addEventListener('click', this.handleContrastToggle);
  }

  disconnectedCallback() {
    const toggleBtn = this.shadowRoot.querySelector('.contrast-toggle');
    toggleBtn.removeEventListener('click', this.handleContrastToggle);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue !== oldValue) {
      if (name === 'name') {
        this.shadowRoot.querySelector('.name').innerHTML = newValue;
      }

      if (name === 'hex') {
        this.shadowRoot.querySelector('.hex').innerHTML = newValue;
      }

      if (name === 'rgb') {
        this.shadowRoot.querySelector('.rgb').innerHTML = newValue;
      }

      if (name === 'variable') {
        this.shadowRoot.querySelector('.variable').innerHTML = newValue;
      }
    }
  }
}

// if (!customElements.get('color-swatch')) {
//   window.customElements.define('color-swatch', ColorSwatch);
// }

// export default ColorSwatch;