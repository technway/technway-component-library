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
  --${baseClass}-padding: 10px;
  --${baseClass}-gap: 8px;
  --tnw-input-success: var(--tnw-success-color);
  --tnw-input-danger: var(--tnw-danger-color);
  --tnw-input-warning: var(--tnw-warning-color);
  --tnw-input-info: var(--tnw-info-color);
  --${baseClass}-pl-c: var(--tnw-placeholder-color);
  --${baseClass}-pl-foc-c: var(--tnw-placeholder-color);
  --${baseClass}-font: var(--tnw-font-text);
}

::-webkit-input-placeholder {
  font-family: var(--${baseClass}-font);
  color: var(--tnw-input-placeholder-color, var(--${baseClass}-pl-c));
  opacity: 1;
}
::-moz-placeholder {
  font-family: var(--${baseClass}-font);
  color: var(--tnw-input-placeholder-color, var(--${baseClass}-pl-c));
  opacity: 1;
}
:-ms-input-placeholder {
  font-family: var(--${baseClass}-font);
  color: var(--tnw-input-placeholder-color, var(--${baseClass}-pl-c));
  opacity: 1;
}
::placeholder {
  font-family: var(--${baseClass}-font);
  color: var(--tnw-input-placeholder-color, var(--${baseClass}-pl-c));
  opacity: 1;
}
:focus::placeholder {
  color: var(--tnw-input-placeholder-focus-color, var(--${baseClass}-pl-foc-c));
}

.${baseClass}--outlined {
  background: none;
  outline-width: var(--tnw-border-sm);
  outline-style: solid;
  outline-color: var(--tnw-border-color);
  border: 0;
  padding: var(--${baseClass}-padding) calc(var(--${baseClass}-padding) * 1.5);
  background: none;
}
.${baseClass}--outlined:focus {
  outline-color: var(--tnw-primary-color);
}

.${baseClass}--underlined {
  border: 0;
  border-bottom: var(--tnw-border-sm) solid var(--tnw-border-color);
  outline-color: transparent;
  padding-bottom: var(--${baseClass}-padding);
  background: none;
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
  outline-color: var(--tnw-input-success);
  border-bottom-color: var(--tnw-primary-success);
}
.${baseClass}--success:focus,
.${baseClass}--success:focus-within,
.${baseClass}--success:focus-visible {
  outline-color: var(--tnw-input-success);
  border-bottom-color: var(--tnw-primary-success);
}

.${baseClass}--danger {
  outline-color: var(--tnw-input-danger);
  border-bottom-color: var(--tnw-primary-danger);
}
.${baseClass}--danger:focus,
.${baseClass}--danger:focus-within,
.${baseClass}--danger:focus-visible {
  outline-color: var(--tnw-input-danger);
  border-bottom-color: var(--tnw-primary-danger);
}

.${baseClass}--warning {
  outline-color: var(--tnw-input-warning);
  border-bottom-color: var(--tnw-primary-warning);
}
.${baseClass}--warning:focus,
.${baseClass}--warning:focus-within,
.${baseClass}--warning:focus-visible {
  outline-color: var(--tnw-input-warning);
  border-bottom-color: var(--tnw-primary-warning);
}

.${baseClass}--info {
  outline-color: var(--tnw-input-info);
  border-bottom-color: var(--tnw-primary-info);
}
.${baseClass}--info:focus,
.${baseClass}--info:focus-within,
.${baseClass}--info:focus-visible {
  outline-color: var(--tnw-input-info);
  border-bottom-color: var(--tnw-primary-info);
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