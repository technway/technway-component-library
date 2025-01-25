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
  --${baseClass}-focus-ring-width: 2px;
  --${baseClass}-focus-ring-offset: 2px;
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


.${baseClass}--primary {
  --${baseClass}-border-color: var(--tnw-primary-color);
}
.${baseClass}--secondary {
  --${baseClass}-border-color: var(--tnw-secondary-color);
}
.${baseClass}--auto {
  --${baseClass}-border-color: var(--tnw-border-color);
}
.${baseClass}--inverse {
  --${baseClass}-border-color: var(--tnw-border-color-inverse);
}
.${baseClass}--light {
  --${baseClass}-border-color: var(--tnw-border-color-opacity);
}
.${baseClass}--white {
  --${baseClass}-border-color: var(--tnw-white);
}
.${baseClass}--black {
  --${baseClass}-border-color: var(--tnw-black);
}
.${baseClass}--success {
  --${baseClass}-state-color: var(--${baseClass}-success);
}
.${baseClass}--danger {
  --${baseClass}-state-color: var(--${baseClass}-danger);
}
.${baseClass}--warning {
  --${baseClass}-state-color: var(--${baseClass}-warning);
}
.${baseClass}--info {
  --${baseClass}-state-color: var(--${baseClass}-info);
}

/* Focus styles */
.${baseClass}:not(.${baseClass}--underlined):focus-visible {
    outline: var(--${baseClass}-focus-ring-width) solid var(--${baseClass}-state-color, var(--tnw-primary-color));
    outline-offset: var(--${baseClass}-focus-ring-offset);
}
/* For browsers that don't support :focus-visible */
.${baseClass}:not(.${baseClass}--underlined):focus:not(:focus-visible) {
    outline: none;
}

/* Ring Hover styles */
.${baseClass}--hover-ring:not(.${baseClass}--underlined):hover {
    outline: var(--${baseClass}-focus-ring-width) solid var(--${baseClass}-state-color, var(--tnw-primary-color));
    outline-offset: var(--${baseClass}-focus-ring-offset);
}

.${baseClass}--hover-color {
  outline: none;
}

.${baseClass}--none {
  border: 0;
}

.${baseClass}--disabled {
  opacity: 0.6;
}

.${baseClass}--outlined {
  background: none;
  border-width: var(--tnw-border-sm);
  border-style: solid;
  padding: var(--${baseClass}-p-y) var(--${baseClass}-p-x);
  border-color: var(--${baseClass}-state-color, var(--${baseClass}-border-color));
}
.${baseClass}--outlined.${baseClass}--hover-color:hover {
  border-color: var(--${baseClass}-state-color, var(--tnw-primary-color));
}
.${baseClass}--outlined.${baseClass}:focus-visible {
  border-color: var(--${baseClass}-state-color, var(--tnw-primary-color));
}

.${baseClass}--underlined {
  outline-color: transparent;
  padding-bottom: var(--${baseClass}-p-y);
  border-top: 0px;
  border-right: 0px;
  border-left: 0px;
  border-bottom-width: var(--tnw-border-sm);
  border-bottom-style: solid;
  border-bottom-color: var(--${baseClass}-state-color, var(--${baseClass}-border-color));
  background: none;
}
.${baseClass}--underlined.${baseClass}--hover-color:hover {
  border-bottom-color: var(--${baseClass}-state-color, var(--tnw-primary-color));
}
.${baseClass}--underlined.${baseClass}:focus-visible {
  border-bottom-color: var(--${baseClass}-state-color, var(--tnw-primary-color));
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