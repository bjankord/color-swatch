const staticStyles = `
color-swatch {
  background-color: #fff;
  border: 10px solid rgba(0,0,0,0);
  box-sizing: border-box;
  box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.15);
  border-radius: 5px;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
}

color-swatch::part(cs-swatch) {
  border-radius: 5px;
  min-height: 6.250rem;
}

color-swatch::part(cs-contrast-info) {
  visibility: hidden;
}

color-swatch[show-contrast-info="true"]::part(cs-contrast-info) {
  visibility: visible;
}

color-swatch ul {
  margin: 0 !important;
  padding: 0 !important;
  list-style: none !important;
}

color-swatch li + li {
  padding-top: 0.5rem;
}

color-swatch::part(cs-contrast-info) {
  margin-top: 4.688rem;
  padding: 0.625rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

color-swatch::part(cs-contrast-info-container) {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
}

color-swatch::part(cs-contrast-list) {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}

color-swatch::part(cs-large-light-text-status),
color-swatch::part(cs-normal-light-text-status),
color-swatch::part(cs-large-dark-text-status),
color-swatch::part(cs-normal-dark-text-status) {
  font-size: 0.85em;
  background: #ccc;
  border-radius: 3px;
  padding: 0.313rem 0;
  min-width: 3.375rem;
  text-align: center;
  margin: 0;
}

color-swatch::part(cs-large-light-text),
color-swatch::part(cs-large-dark-text) {
  font-size: 18pt;
  text-align: center;
}

color-swatch::part(cs-normal-light-text),
color-swatch::part(cs-normal-dark-text) {
  font-size: 14pt;
  text-align: center;
}

color-swatch::part(cs-body) {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

color-swatch::part(cs-slot) {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

color-swatch::part(cs-color-name) {
  font-size: 1.15rem;
  font-weight: 700;
}

color-swatch::part(cs-contrast-toggle) {
  border: 0;
  font: inherit;
  background: transparent;
  cursor: pointer;
}

color-swatch::part(cs-visually-hidden) {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}`;

export { staticStyles }