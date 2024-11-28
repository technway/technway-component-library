export const a11yStyles = `
.sr-only {
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  clip: rect(0, 0, 0, 0) !important;
  border: 0 !important;
  white-space: nowrap !important;
}
.keyboard-only:focus {
  outline: 2px solid var(--tnw-focus-color);
  outline-offset: 2px;
}
@media (prefers-reduced-motion: reduce) {
  .reduced-motion {
    animation: none;
    transition: none;
  }
}
`;

export const containerStyles = `
.container {
  max-width: var(--tnw-container-max-width);
  width: var(--tnw-container-width);
  margin-left: auto;
  margin-right: auto;
}
`;

export const resetStyles = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline-color: transparent;
  scroll-behavior: smooth;
}
`;

export const globalStyles = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline-color: transparent;
  scroll-behavior: smooth;
}

html,
body {
  overflow-x: hidden;
}

body {
  color: var(--tnw-text-color);
  background-color: var(--tnw-background-color);
  font-family: var(--tnw-font-text);
  font-size: var(--tnw-fs-text);
  font-weight: var(--tnw-fw-text);
  direction: var(--tnw-direction);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
`;