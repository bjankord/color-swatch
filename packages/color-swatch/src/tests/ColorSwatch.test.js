import { beforeEach, describe, expect, test, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

// Defines the <color-swatch> custom element.
import '../../index.js';

function clearDom() {
  document.body.innerHTML = '';
  const styleEl = document.querySelector('#color-swatch-styles');
  if (styleEl) styleEl.remove();
}

function createSwatch({ id, attributes = {}, children = [] }) {
  const el = document.createElement('color-swatch');
  if (id) el.id = id;

  // Order matters: ColorSwatch.attributeChangedCallback calls determineContrast()
  // on every observed attribute change, so ensure color-value is set first.
  if (attributes['color-value'] != null) {
    el.setAttribute('color-value', attributes['color-value']);
  }
  for (const [name, value] of Object.entries(attributes)) {
    if (name === 'color-value') continue;
    if (value === null || value === undefined) continue;
    el.setAttribute(name, String(value));
  }

  for (const child of children) el.appendChild(child);

  // Append after attributes are set so connectedCallback can find the button.
  document.body.appendChild(el);
  return el;
}

function setupFixturePage() {
  const makeSpan = (text) => {
    const span = document.createElement('span');
    span.textContent = text;
    return span;
  };

  createSwatch({
    id: 'default-swatch',
    attributes: { 'color-value': '#3498db' },
    children: [makeSpan('Blue Color')],
  });

  createSwatch({
    id: 'contrast-visible',
    attributes: { 'color-value': '#e74c3c', 'show-contrast-info': 'true' },
    children: [makeSpan('Red with Contrast Info')],
  });

  createSwatch({
    id: 'custom-text-colors',
    attributes: {
      'color-value': '#2ecc71',
      'light-text-color': '#ffffff',
      'dark-text-color': '#1a1a1a',
    },
    children: [makeSpan('Green with Custom Text Colors')],
  });

  createSwatch({
    id: 'high-contrast',
    attributes: { 'color-value': '#ffffff', 'show-contrast-info': 'true' },
    children: [makeSpan('High Contrast (White)')],
  });

  createSwatch({
    id: 'low-contrast',
    attributes: {
      'color-value': '#dddddd',
      'show-contrast-info': 'true',
      'light-text-color': '#cccccc',
      'dark-text-color': '#bbbbbb',
    },
    children: [makeSpan('Low Contrast (Light Gray)')],
  });

  createSwatch({
    id: 'threshold-contrast',
    attributes: { 'color-value': '#767676', 'show-contrast-info': 'true' },
    children: [makeSpan('Threshold Contrast')],
  });

  createSwatch({
    id: 'dynamic-swatch',
    attributes: { 'color-value': '#9b59b6' },
  });
}

function $shadow(host, selector) {
  const el = host.shadowRoot?.querySelector(selector);
  if (!el) throw new Error(`Missing shadow element: ${selector}`);
  return el;
}

function hasHideClass(host) {
  return $shadow(host, '[part="cs-contrast-info"]').classList.contains('hide');
}

describe('ColorSwatch (unit)', () => {
  beforeEach(() => {
    vi.spyOn(console, 'log').mockImplementation(() => {});
    clearDom();
    setupFixturePage();
  });

  test('renders with correct background color from color-value attribute', () => {
    const host = document.querySelector('#default-swatch');
    const swatch = $shadow(host, '[part="cs-swatch"]');

    // Use inline style attribute to avoid jsdom computed-style differences.
    expect(swatch.getAttribute('style')).toContain('background-color: #3498db');
  });

  test('projects slot content correctly (light DOM content is preserved)', () => {
    const host = document.querySelector('#default-swatch');
    const lightDomSpan = host.querySelector('span');

    expect(lightDomSpan?.textContent?.trim()).toBe('Blue Color');
  });

  test('hides contrast info by default', () => {
    const host = document.querySelector('#default-swatch');
    expect(hasHideClass(host)).toBe(true);
  });

  test('shows contrast info when show-contrast-info attribute is set', () => {
    const host = document.querySelector('#contrast-visible');
    expect(hasHideClass(host)).toBe(false);
  });

  test('applies custom light-text-color and dark-text-color', () => {
    const host = document.querySelector('#custom-text-colors');
    const light = $shadow(host, '[part="cs-large-light-text"]');
    const dark = $shadow(host, '[part="cs-large-dark-text"]');

    expect(light.getAttribute('style')).toContain('color: #ffffff');
    expect(dark.getAttribute('style')).toContain('color: #1a1a1a');
  });

  test('renders multiple swatches on same page', () => {
    const swatches = document.querySelectorAll('color-swatch');
    expect(swatches.length).toBe(7);
  });

  test('injects static stylesheet only once', () => {
    // Constructor appends <style id="color-swatch-styles"> to <head>.
    // Multiple instances should not duplicate it.
    const styles = document.querySelectorAll('#color-swatch-styles');
    expect(styles.length).toBe(1);
  });

  test('clicking contrast toggle button shows contrast info', async () => {
    const host = document.querySelector('#default-swatch');
    expect(hasHideClass(host)).toBe(true);

    const btn = $shadow(host, '[part="cs-contrast-toggle"]');
    btn.click();

    expect(hasHideClass(host)).toBe(false);
  });

  test('clicking contrast toggle button hides contrast info when already visible', () => {
    const host = document.querySelector('#contrast-visible');
    expect(hasHideClass(host)).toBe(false);

    const btn = $shadow(host, '[part="cs-contrast-toggle"]');
    btn.click();

    expect(hasHideClass(host)).toBe(true);
  });

  test('dynamically changing color-value updates background color', () => {
    const host = document.querySelector('#dynamic-swatch');
    const swatch1 = $shadow(host, '[part="cs-swatch"]');
    expect(swatch1.getAttribute('style')).toContain('background-color: #9b59b6');

    host.setAttribute('color-value', '#e67e22');

    const swatch2 = $shadow(host, '[part="cs-swatch"]');
    expect(swatch2.getAttribute('style')).toContain('background-color: #e67e22');
  });

  test('dynamically changing show-contrast-info toggles visibility', () => {
    const host = document.querySelector('#dynamic-swatch');
    expect(hasHideClass(host)).toBe(true);

    host.setAttribute('show-contrast-info', 'true');
    expect(hasHideClass(host)).toBe(false);

    host.removeAttribute('show-contrast-info');
    expect(hasHideClass(host)).toBe(true);
  });

  test('high contrast colors show passing indicators for all checks (dark text checks)', () => {
    const host = document.querySelector('#high-contrast');

    const largeDark = $shadow(host, '[part="cs-large-dark-text-status"]');
    const normalDark = $shadow(host, '[part="cs-normal-dark-text-status"]');

    expect(largeDark.textContent).toContain('✅');
    expect(normalDark.textContent).toContain('✅');
  });

  test('low contrast colors show failing indicators', () => {
    const host = document.querySelector('#low-contrast');

    const largeLight = $shadow(host, '[part="cs-large-light-text-status"]');
    const normalLight = $shadow(host, '[part="cs-normal-light-text-status"]');
    const largeDark = $shadow(host, '[part="cs-large-dark-text-status"]');
    const normalDark = $shadow(host, '[part="cs-normal-dark-text-status"]');

    expect(largeLight.textContent).toContain('❌');
    expect(normalLight.textContent).toContain('❌');
    expect(largeDark.textContent).toContain('❌');
    expect(normalDark.textContent).toContain('❌');
  });

  test('contrast ratio is displayed in title attribute', () => {
    const host = document.querySelector('#high-contrast');
    const list = $shadow(host, '[part="cs-contrast-list"]');

    const title = list.getAttribute('title');
    expect(title).toMatch(/contrast/i);
    expect(title).toMatch(/\d+(\.\d+)?/);
  });

  test('threshold contrast shows correct pass/fail for large vs normal text', () => {
    const host = document.querySelector('#threshold-contrast');

    const largeLight = $shadow(host, '[part="cs-large-light-text-status"]');
    const normalLight = $shadow(host, '[part="cs-normal-light-text-status"]');

    expect(largeLight.textContent).toContain('✅');
    expect(normalLight.textContent).toContain('✅');
  });

  test('toggle button has accessible title attribute', () => {
    const host = document.querySelector('#default-swatch');
    const btn = $shadow(host, '[part="cs-contrast-toggle"]');

    expect(btn.getAttribute('title')).toBe('Toggle Contrast Info');
  });

  test('toggle button has visually hidden text for screen readers', () => {
    const host = document.querySelector('#default-swatch');
    const hiddenText = $shadow(host, '[part="cs-visually-hidden"]');

    expect(hiddenText.textContent?.trim()).toBe('Toggle Contrast Info');
  });

  test('toggle button is keyboard focusable', () => {
    const host = document.querySelector('#default-swatch');
    const btn = $shadow(host, '[part="cs-contrast-toggle"]');

    btn.focus();
    expect(host.shadowRoot?.activeElement).toBe(btn);
  });

  test('toggle button can be activated with keyboard', async () => {
    const user = userEvent.setup();
    const host = document.querySelector('#default-swatch');

    expect(hasHideClass(host)).toBe(true);

    const btn1 = $shadow(host, '[part="cs-contrast-toggle"]');
    btn1.focus();
    await user.keyboard('{Enter}');

    expect(hasHideClass(host)).toBe(false);

    // Re-query after re-render
    const btn2 = $shadow(host, '[part="cs-contrast-toggle"]');
    btn2.focus();
    await user.keyboard('{Enter}');

    expect(hasHideClass(host)).toBe(true);
  });

  test('contrast info items have descriptive titles', () => {
    const host = document.querySelector('#contrast-visible');
    const lists = host.shadowRoot?.querySelectorAll('[part="cs-contrast-list"]') ?? [];

    expect(lists.length).toBe(4);
    for (const el of lists) {
      expect(el.getAttribute('title')).toMatch(/contrast/i);
    }
  });
});
