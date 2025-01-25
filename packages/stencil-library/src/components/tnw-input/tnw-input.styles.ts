import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-input`;

export const styles = `
* {
    box-sizing: border-box;
}
    
:host {
  display: flex;
  flex-direction: column;
  gap: var(--${baseClass}-gap);
  --${baseClass}-success: var(--tnw-success-color);
  --${baseClass}-danger: var(--tnw-danger-color);
  --${baseClass}-warning: var(--tnw-warning-color);
  --${baseClass}-info: var(--tnw-info-color);
  --${baseClass}-gap: 8px;
  --${baseClass}-pl-c: var(--tnw-placeholder-color);
  --${baseClass}-pl-foc-c: var(--tnw-placeholder-color);
  --${baseClass}-fw: var(--tnw-fw-500);
  --${baseClass}-font: var(--tnw-font-text);
}

::-webkit-input-placeholder {
  font-family: var(--${baseClass}-font);
  font-size: var(--${baseClass}-fs);
  color: var(--${baseClass}-placeholder-color, var(--${baseClass}-pl-c));
  opacity: 1;
}
::-moz-placeholder {
  font-family: var(--${baseClass}-font);
  font-size: var(--${baseClass}-fs);
  color: var(--${baseClass}-placeholder-color, var(--${baseClass}-pl-c));
  opacity: 1;
}
:-ms-input-placeholder {
  font-family: var(--${baseClass}-font);
  font-size: var(--${baseClass}-fs);
  color: var(--${baseClass}-placeholder-color, var(--${baseClass}-pl-c));
  opacity: 1;
}
::placeholder {
  font-family: var(--${baseClass}-font);
  font-size: var(--${baseClass}-fs);
  color: var(--${baseClass}-placeholder-color, var(--${baseClass}-pl-c));
  opacity: 1;
}
:focus::placeholder {
  color: var(--${baseClass}-placeholder-focus-color, var(--${baseClass}-pl-foc-c));
  font-size: var(--${baseClass}-fs);
}

.${baseClass} {
  font-family: var(--${baseClass}-font);
  font-size: var(--${baseClass}-fs);
  font-weight: var(--${baseClass}-fw);
}

.${baseClass}--none {
  border: 0;
}

.${baseClass}--outlined {
  background: none;
  outline-width: var(--tnw-border-sm);
  outline-style: solid;
  border: 0;
  padding: var(--${baseClass}-p-y) var(--${baseClass}-p-x);
  background: none;
}
.${baseClass}--outlined-primary {
  outline-color: var(--tnw-primary-color);
}
.${baseClass}--outlined-secondary {
  outline-color: var(--tnw-secondary-color);
}
.${baseClass}--outlined-auto {
  outline-color: var(--tnw-border-color);
}
.${baseClass}--outlined-inverse {
  outline-color: var(--tnw-border-color-inverse);
}
.${baseClass}--outlined-light {
  outline-color: var(--tnw-border-color-opacity);
}
.${baseClass}--outlined-white {
  outline-color: var(--tnw-white);
}
.${baseClass}--outlined-black {
  outline-color: var(--tnw-black);
}
.${baseClass}--outlined:focus {
  outline-color: var(--tnw-primary-color);
}

.${baseClass}--underlined {
  border: 0;
  outline-color: transparent;
  padding-bottom: var(--${baseClass}-p-y);
  background: none;
}
.${baseClass}--underlined-primary {
  border-bottom: var(--tnw-border-color);
}
.${baseClass}--underlined-secondary {
  border-bottom: var(--tnw-secondary-color);
}
.${baseClass}--underlined-auto {
  border-bottom: var(--tnw-border-color);
}
.${baseClass}--underlined-inverse {
  border-bottom: var(--tnw-border-color-inverse);
}
.${baseClass}--underlined-light {
  border-bottom: var(--tnw-border-color-opacity);
}
.${baseClass}--underlined-white {
  border-bottom: var(--tnw-white);
}
.${baseClass}--underlined-black {
  border-bottom: var(--tnw-black);
}
.${baseClass}--underlined:focus,
.${baseClass}--underlined:focus-within,
.${baseClass}--underlined:focus-visible {
  border-bottom-color: var(--tnw-primary-color);
}
.${baseClass}--underlined:focus-visible {
  outline-style: none;
}

.${baseClass}--success {
  outline-color: var(--${baseClass}-success);
  border-bottom-color: var(--tnw-primary-success);
}
.${baseClass}--success:focus,
.${baseClass}--success:focus-within,
.${baseClass}--success:focus-visible {
  outline-color: var(--${baseClass}-success);
  border-bottom-color: var(--tnw-primary-success);
}

.${baseClass}--danger {
  outline-color: var(--${baseClass}-danger);
  border-bottom-color: var(--tnw-primary-danger);
}
.${baseClass}--danger:focus,
.${baseClass}--danger:focus-within,
.${baseClass}--danger:focus-visible {
  outline-color: var(--${baseClass}-danger);
  border-bottom-color: var(--tnw-primary-danger);
}

.${baseClass}--warning {
  outline-color: var(--${baseClass}-warning);
  border-bottom-color: var(--tnw-primary-warning);
}
.${baseClass}--warning:focus,
.${baseClass}--warning:focus-within,
.${baseClass}--warning:focus-visible {
  outline-color: var(--${baseClass}-warning);
  border-bottom-color: var(--tnw-primary-warning);
}

.${baseClass}--info {
  outline-color: var(--${baseClass}-info);
  border-bottom-color: var(--tnw-primary-info);
}
.${baseClass}--info:focus,
.${baseClass}--info:focus-within,
.${baseClass}--info:focus-visible {
  outline-color: var(--${baseClass}-info);
  border-bottom-color: var(--tnw-primary-info);
}

/* - Sizes - */
.${baseClass}--xs {
    --${baseClass}-p-y: 3px;
    --${baseClass}-p-x: 6px;
    --${baseClass}-fs: var(--tnw-fs-2xs);
}
.${baseClass}--sm {
    --${baseClass}-p-y: 5px;
    --${baseClass}-p-x: 10px;
    --${baseClass}-fs: var(--tnw-fs-xs);
}
.${baseClass}--md {
    --${baseClass}-p-y: 12px;
    --${baseClass}-p-x: 18px;
    --${baseClass}-fs: var(--tnw-fs-xs);
}
.${baseClass}--lg {
    --${baseClass}-p-y: 16px;
    --${baseClass}-p-x: 24px;
    --${baseClass}-fs: var(--tnw-fs-text);
}
.${baseClass}--xl {
    --${baseClass}-p-y: 20px;
    --${baseClass}-p-x: 24px;
    --${baseClass}-fs: var(--tnw-fs-text);
}
@media only screen and (max-width: 567px) {
    .${baseClass}--md {
        --${baseClass}-p-y: 10px;
        --${baseClass}-p-x: 18px;
    }
}
@media only screen and (max-width: 1024px) {
    .${baseClass}--xl {
        --${baseClass}-fs: var(--tnw-fs-sm);
        --${baseClass}-p-y: 14px;
        --${baseClass}-p-x: 18px;
    }
    .${baseClass}--lg {
        --${baseClass}-p-y: 17px;
        --${baseClass}-p-x: 24px;
    }
}

.sr-only {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
`;