export const styles = `
* {
    box-sizing: border-box;
}
    
:host {
  display: inline-block;
  font-weight: var(--tnw-badge-font-weight, var(--tnw-fw-400));
  font-family: var(--tnw-font-text);
}
:host(.tnw-badge--sm) {
  padding: var(--tnw-badge-padding, 3px 9px) !important;
  font-size: var(--tnw-badge-font-size, var(--tnw-fs-2xs)) !important;
}
:host(.tnw-badge--md) {
  padding: var(--tnw-badge-padding, 4px 12px) !important;
  font-size: var(--tnw-badge-font-size, var(--tnw-fs-xs)) !important;
}
:host(.tnw-badge--lg) {
  padding: var(--tnw-badge-padding, 6px 18px) !important;
  font-size: var(--tnw-badge-font-size, var(--tnw-fs-md)) !important;
}
`;