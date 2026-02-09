import Color from 'colorjs.io';

import { staticStyles } from './styles.js';

// WCAG 2.1 contrast thresholds
const WCAG21_LARGE_TEXT_CONTRAST = 3;
const WCAG21_NORMAL_TEXT_CONTRAST = 4.5;

/**
 * Determines if contrast ratio meets the accessibility threshold
 * @param {number} contrastResult - The calculated contrast ratio
 * @param {number} accessibleContrastAmount - The WCAG threshold
 * @returns {'pass' | 'fail'}
 */
const determineContrastStatus = (contrastResult, accessibleContrastAmount) =>
  contrastResult >= accessibleContrastAmount ? 'pass' : 'fail';

/**
 * Formats a contrast ratio for display
 * @param {number} result - The contrast ratio
 * @returns {string} Formatted ratio (e.g., "4.50:1")
 */
const formatContrastRatio = (result) => `${Number(result).toFixed(2)}:1`;

/** Default contrast info when color is invalid or not set */
const DEFAULT_CONTRAST_INFO = {
  largeText: {
    lightText: { status: 'fail', ratio: 'N/A' },
    darkText: { status: 'fail', ratio: 'N/A' },
  },
  normalText: {
    lightText: { status: 'fail', ratio: 'N/A' },
    darkText: { status: 'fail', ratio: 'N/A' },
  },
};

/**
 * Escapes HTML special characters to prevent XSS
 * @param {string} str - The string to escape
 * @returns {string} The escaped string
 */
const escapeHtml = (str) => {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

const toggleIcon = `<svg aria-hidden="true" focusable="false" style="width: 1em; height: 1em; vertical-align: middle; fill: #000; overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path d="M981.333333 512c0 260.266667-170.666667 469.333333-469.333333 469.333333L512 42.666667C810.666667 42.666667 981.333333 251.733333 981.333333 512z"  />
  <path d="M512 1024c-25.6 0-42.666667-17.066667-42.666667-42.666667L469.333333 42.666667c0-25.6 17.066667-42.666667 42.666667-42.666667 302.933333 0 512 209.066667 512 512S814.933333 1024 512 1024zM554.666667 85.333333 554.666667 938.666667c264.533333-21.333333 384-221.866667 384-426.666667S819.2 106.666667 554.666667 85.333333z"  />
  <path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0c25.6 0 42.666667 17.066667 42.666667 42.666667l0 938.666667C554.666667 1006.933333 537.6 1024 512 1024zM469.333333 85.333333C256 110.933333 85.333333 290.133333 85.333333 512s170.666667 401.066667 384 426.666667L469.333333 85.333333z"  />
</svg>`;

const render = x => {
  const info = x.contrastInfo || DEFAULT_CONTRAST_INFO;
  const isExpanded = x.getAttribute('show-contrast-info') === 'true';

  return `<div part="cs-swatch" class="cs-swatch" style="background-color: ${escapeHtml(x.colorValue)};">
  <div part="cs-contrast-info" aria-hidden="${!isExpanded}">
    <div part="cs-contrast-info-container">
      <dl part="cs-contrast-list" title="Large Light Text Contrast ${info.largeText.lightText.ratio}">
        <dt part="cs-large-light-text" style="color: ${escapeHtml(x.lightTextColor)};">AA</dt>
        <dd part="cs-large-light-text-status">${x.renderContrastPassFail(info.largeText.lightText.status)}</dd>
      </dl>
      <dl part="cs-contrast-list" title="Normal Light Text Contrast ${info.normalText.lightText.ratio}">
        <dt part="cs-normal-light-text" style="color: ${escapeHtml(x.lightTextColor)};">AA</dt>
        <dd part="cs-normal-light-text-status">${x.renderContrastPassFail(info.normalText.lightText.status)}</dd>
      </dl>
    </div>
    <div part="cs-contrast-info-container">
      <dl part="cs-contrast-list" title="Large Dark Text Contrast ${info.largeText.darkText.ratio}">
        <dt part="cs-large-dark-text" style="color: ${escapeHtml(x.darkTextColor)};">AA</dt>
        <dd part="cs-large-dark-text-status">${x.renderContrastPassFail(info.largeText.darkText.status)}</dd>
      </dl>
      <dl part="cs-contrast-list" title="Normal Dark Text Contrast ${info.normalText.darkText.ratio}">
        <dt part="cs-normal-dark-text" style="color: ${escapeHtml(x.darkTextColor)};">AA</dt>
        <dd part="cs-normal-dark-text-status">${x.renderContrastPassFail(info.normalText.darkText.status)}</dd>
      </dl>
    </div>
  </div>
</div>
<div part="cs-body">
  <div part="cs-slot">
    <div part="cs-color-name" class="cs-color-name">${escapeHtml(x.colorName)}</div>
    <slot />
  </div>
  <button type="button" part="cs-contrast-toggle" class="cs-contrast-toggle" title="Toggle Contrast Info" aria-expanded="${isExpanded}">
    <span part="cs-visually-hidden">Toggle Contrast Info</span>
    ${toggleIcon}
  </button>
</div>`;
};

class ColorSwatch extends HTMLElement {
  static get observedAttributes() {
    return [
      'color-value',
      'color-name',
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

    this.contrastInfo = null;

    /**
     * CSS
     * Only append CSS to head if we haven't already added the stylesheet
     * Avoids duplicated styles when multiple color-swatches are added to the page
     */
    if (!document.querySelector('#color-swatch-styles')) {
      const styles = document.createElement('style');
      styles.id = 'color-swatch-styles';
      styles.textContent = staticStyles;
      document.head.appendChild(styles);
    }
  }

  /**
   * Helper to set or remove an attribute based on value
   * @param {string} name - The attribute name
   * @param {string|null} val - The value to set, or falsy to remove
   */
  _setAttr(name, val) {
    if (val) {
      this.setAttribute(name, val);
    } else {
      this.removeAttribute(name);
    }
  }

  get colorValue() {
    return this.getAttribute('color-value');
  }

  set colorValue(val) {
    this._setAttr('color-value', val);
  }

  get colorName() {
    return this.getAttribute('color-name');
  }

  set colorName(val) {
    this._setAttr('color-name', val);
  }

  get lightTextColor() {
    return this.getAttribute('light-text-color') || '#ffffff';
  }

  set lightTextColor(val) {
    this._setAttr('light-text-color', val);
  }

  get darkTextColor() {
    return this.getAttribute('dark-text-color') || '#000000';
  }

  set darkTextColor(val) {
    this._setAttr('dark-text-color', val);
  }

  get showContrastInfo() {
    return this.getAttribute('show-contrast-info') === 'true';
  }

  set showContrastInfo(val) {
    if(val) {
      this.setAttribute('show-contrast-info', 'true');
    } else {
      this.removeAttribute('show-contrast-info');
    }
  }

  determineContrast() {
    // Early return if no color value is set
    if (!this.colorValue) {
      return DEFAULT_CONTRAST_INFO;
    }

    try {
      const swatchColor = new Color(this.colorValue);
      const lightTextColor = new Color(this.lightTextColor);
      const darkTextColor = new Color(this.darkTextColor);
      const lightTextColorContrast = swatchColor.contrast(lightTextColor, "WCAG21");
      const darkTextColorContrast = swatchColor.contrast(darkTextColor, "WCAG21");

      return {
        largeText: {
          lightText: {
            status: determineContrastStatus(lightTextColorContrast, WCAG21_LARGE_TEXT_CONTRAST),
            ratio: formatContrastRatio(lightTextColorContrast),
          },
          darkText: {
            status: determineContrastStatus(darkTextColorContrast, WCAG21_LARGE_TEXT_CONTRAST),
            ratio: formatContrastRatio(darkTextColorContrast),
          },
        },
        normalText: {
          lightText: {
            status: determineContrastStatus(lightTextColorContrast, WCAG21_NORMAL_TEXT_CONTRAST),
            ratio: formatContrastRatio(lightTextColorContrast),
          },
          darkText: {
            status: determineContrastStatus(darkTextColorContrast, WCAG21_NORMAL_TEXT_CONTRAST),
            ratio: formatContrastRatio(darkTextColorContrast),
          },
        },
      };
    } catch (error) {
      console.error('ColorSwatch: Invalid color value', error);
      return DEFAULT_CONTRAST_INFO;
    }
  }

  renderContrastPassFail(status) {
    if (status === 'pass') {
      return '<span role="img" aria-label="Pass">✅</span>';
    }
    return '<span role="img" aria-label="Fail">❌</span>';
  }

  handleContrastToggle() {
    const isExpanded = this.showContrastInfo;
    this.showContrastInfo = !isExpanded;

    // Update aria attributes without full re-render
    const toggleBtn = this.shadowRoot.querySelector('[part="cs-contrast-toggle"]');
    const contrastInfo = this.shadowRoot.querySelector('[part="cs-contrast-info"]');
    toggleBtn?.setAttribute('aria-expanded', String(!isExpanded));
    contrastInfo?.setAttribute('aria-hidden', String(isExpanded));
  }

  connectedCallback() {
    // Initial render when element is added to DOM
    this.contrastInfo = this.determineContrast();
    this.shadowRoot.innerHTML = render(this);

    const toggleBtn = this.shadowRoot.querySelector('[part="cs-contrast-toggle"]');
    toggleBtn?.addEventListener('click', this.handleContrastToggle);
  }

  disconnectedCallback() {
    const toggleBtn = this.shadowRoot.querySelector('[part="cs-contrast-toggle"]');
    toggleBtn?.removeEventListener('click', this.handleContrastToggle);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // Guard against early calls before connectedCallback
    if (!this.isConnected) {
      return;
    }

    if (newValue !== oldValue) {
      // Skip re-render for show-contrast-info since CSS handles visibility
      if (name === 'show-contrast-info') {
        return;
      }

      this.contrastInfo = this.determineContrast();

      // Remove old event listener before replacing DOM to prevent memory leak
      const oldToggleBtn = this.shadowRoot.querySelector('[part="cs-contrast-toggle"]');
      oldToggleBtn?.removeEventListener('click', this.handleContrastToggle);

      this.shadowRoot.innerHTML = render(this);

      // Re-add event listener when DOM is updated
      const toggleBtn = this.shadowRoot.querySelector('[part="cs-contrast-toggle"]');
      toggleBtn?.addEventListener('click', this.handleContrastToggle);
    }
  }
}

window.customElements.get("color-swatch") || window.customElements.define("color-swatch", ColorSwatch);
