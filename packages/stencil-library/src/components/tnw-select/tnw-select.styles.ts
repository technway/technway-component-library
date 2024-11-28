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
  display: inline-block;
  position: relative;
  width: max-content;
}
`;

const buttonStyles = `
.${buttonClass} {
  padding: 7px 14px;
  background-color: transparent;
  cursor: pointer;
  border: var(--tnw-border-sm) solid var(--tnw-border-color);
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  text-transform: capitalize;
  font-family: var(--tnw-font-text);
  font-size: var(--tnw-fs-default);
}
`;

const dropdownStyles = `
.${dropdownClass} {
  padding: 7px 14px;
  border: var(--tnw-border-sm) solid var(--tnw-border-color);
  background-color: var(--tnw-background-color);
  position: absolute;
  top: 40px;
  left: 0; 
  z-index: 4;
  min-width: 100%;
  width: max-content;
  width: -moz-max-content;
  max-height: 240px;
  overflow-y: auto;
  display: none;
  list-style-type: none;
  margin: 0;
}
.${dropdownClass}--open {
  display: flex;
  gap: 15px;
  flex-direction: column;
}
.${dropdownClass}::-webkit-scrollbar {
  width: var(--tnw-scrollbar-size);
}
.${dropdownClass}::-webkit-scrollbar-track {
  background-color: transparent;
  border: 0;
}
.${dropdownClass}::-webkit-scrollbar-thumb {
  background-color: var(--tnw-scrollbar-thumb-color);
  border: 0;
}
`;

const optionStyles = `
.${optionClass} {
  font-size: var(--tnw-fs-default);
  font-family: var(--tnw-text-font);
}
`;

export const styles = baseStyles + buttonStyles + dropdownStyles + optionStyles;