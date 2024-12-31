import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-select`;
const buttonClass = `${baseClass}__button`;
const dropdownClass = `${baseClass}__dropdown`;
const optionClass = `${baseClass}__option`;

const baseStyles = `
* {
    box-sizing: border-box;
}
    
:host {
  --tnw-text-font: var(--tnw-font-text);
  --tnw-select-hover-color: var(--tnw-gray-100);
  --tnw-select-shadow: 0 10px 15px -5px var(--tnw-shadow-color);
  display: inline-block;
  position: relative;
  width: max-content;
}

:host(.${baseClass}--full-width) {
  width: 100%:
}
:host(.${baseClass}--disabled) {
  opacity: 0.5;
  cursor: not-allowed;
}
:host(.${baseClass}--sm) {
  --tnw-select-fs: var(--tnw-fs-2xs);
  --tnw-select-padding-y: 5px;
  --tnw-select-padding-x: 10px;
}
:host(.${baseClass}--md) {
  --tnw-select-fs: var(--tnw-fs-xs);
  --tnw-select-padding-y: 8px;
  --tnw-select-padding-x: 16px;
}
:host(.${baseClass}--lg) {
  --tnw-select-padding-y: 10px;
  --tnw-select-padding-x: 20px;
}
`;

const buttonStyles = `
.${buttonClass} {
  padding: var(--tnw-select-padding-y) var(--tnw-select-padding-x);
  background-color: transparent;
  cursor: pointer;
  border: var(--tnw-border-sm) solid var(--tnw-border-color);
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  transition: border-color 0.2s ease-in-out;
  min-width: 100%;
  max-width: 300px;
}
.${buttonClass}-content {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  width: calc(100% - 20px);
}
.${buttonClass}-label {
  text-transform: capitalize;
  font-family: var(--tnw-font-text);
  font-size: var(--tnw-select-fs);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  font-weight: var(--tnw-fw-500);
}
.${buttonClass}--clicked,
.${buttonClass}:hover {
  border-color: var(--tnw-border-color-focus);
}
`;

const dropdownStyles = `
.${dropdownClass} {
  border: var(--tnw-border-sm) solid var(--tnw-border-color);
  background-color: var(--tnw-background-color);
  position: absolute;
  top: 40px;
  left: 0; 
  z-index: 4;
  min-width: 100%;
  width: max-content;
  width: -moz-max-content;
  max-height: 215px;
  overflow-x: hidden;
  overflow-y: auto;
  display: none;
  list-style-type: none;
  margin: 0;
  padding: 2px 0;
  box-shadow: var(--tnw-select-shadow);
  max-width: 300px;
}
.${dropdownClass}--open {
  display: block;
}
/*.${dropdownClass}::-webkit-scrollbar {
  width: var(--tnw-scrollbar-size);
}
.${dropdownClass}::-webkit-scrollbar-track {
  background-color: transparent;
  border: 0;
}
.${dropdownClass}::-webkit-scrollbar-thumb {
  background-color: var(--tnw-scrollbar-thumb-color);
  border: 0;
}*/
`;

const optionStyles = `
.${optionClass} {
  font-family: var(--tnw-text-font);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  padding:
    var(--tnw-select-padding-y)
    calc(var(--tnw-select-padding-x) * 2)
    var(--tnw-select-padding-y)
    var(--tnw-select-padding-x);
  transition: background-color 0.2s ease-in-out;
}
.${optionClass}--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.${optionClass}--bordered:not(:last-child) {
  border-bottom: var(--tnw-border-sm) solid var(--tnw-border-color-opacity);
}
.${optionClass}:not(${optionClass}--disabled):hover {
  background-color: var(--tnw-select-hover-color);

}
.${buttonClass}-icon,
.${optionClass}-icon {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}
.${optionClass}-label {
  font-size: var(--tnw-select-fs);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
}
`;

export const styles = baseStyles + buttonStyles + dropdownStyles + optionStyles;